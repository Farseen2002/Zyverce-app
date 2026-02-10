"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
    className?: string;
    color?: string;
    trailOpacity?: number; // Not used with destination-out, but kept for API compat if we switch back
    particleCount?: number;
    speed?: number;
}

export default function NeuralBackground({
    className,
    color = "#6366f1", // Default Indigo
    trailOpacity = 0.15,
    particleCount = 600,
    speed = 1,
}: NeuralBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // --- CONFIGURATION ---
        let width = container.clientWidth;
        let height = container.clientHeight;
        let particles: Particle[] = [];
        let animationFrameId: number;
        let mouse = { x: -1000, y: -1000 };

        // --- PARTICLE CLASS ---
        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            age: number;
            life: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.age = 0;
                this.life = Math.random() * 200 + 100;
            }

            update() {
                // 1. Flow Field Math
                const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;

                // 2. Add force from flow field
                this.vx += Math.cos(angle) * 0.2 * speed;
                this.vy += Math.sin(angle) * 0.2 * speed;

                // 3. Mouse Repulsion
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const interactionRadius = 150;

                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    this.vx -= dx * force * 0.05;
                    this.vy -= dy * force * 0.05;
                }

                // 4. Apply Velocity & Friction
                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.95;
                this.vy *= 0.95;

                // 5. Aging
                this.age++;
                if (this.age > this.life) {
                    this.reset();
                }

                // 6. Wrap around screen
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = 0;
                this.vy = 0;
                this.age = 0;
                this.life = Math.random() * 200 + 100;
            }

            draw(context: CanvasRenderingContext2D) {
                context.fillStyle = color;
                // Fade in and out based on age
                const alpha = 1 - Math.abs((this.age / this.life) - 0.5) * 2;
                context.globalAlpha = alpha;
                context.fillRect(this.x, this.y, 1.5, 1.5);
            }
        }

        // --- INITIALIZATION ---
        const init = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        // --- ANIMATION LOOP ---
        const animate = () => {
            // Clear with fade effect
            // Use destination-out to fade existing pixels to transparent
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
            ctx.fillRect(0, 0, width, height);

            // Reset composite operation to draw new particles
            ctx.globalCompositeOperation = 'source-over';

            particles.forEach((p) => {
                p.update();
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // --- EVENT LISTENERS ---
        const handleResize = () => {
            width = container.clientWidth;
            height = container.clientHeight;
            init();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        }

        init();
        animate();

        window.addEventListener("resize", handleResize);
        // Attach to container for local coordinates, or window if needed globally.
        // To match requirement of interaction, container is usually best for "hero section"
        // but if we want it to react even when hovering over buttons, we should listen on the container
        // and since the container covers the full section, it should capture events if we don't block them.
        // However, we want pointer-events-none on the canvas container so it doesn't block clicks.
        // So we need to listen on window or the parent section. 
        // Let's listen on window and calculate relative position to be safe and easiest.

        // Better yet: Attach to window for seamless interaction
        const handleWindowMouseMove = (e: MouseEvent) => {
            const rect = container.getBoundingClientRect();
            // Check if mouse is within container bounds visually if we want strict containment,
            // but for "hero section" effect usually we want it to react if we are over the hero.
            // We will calculate relative x/y regardless.
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                mouse.x = x;
                mouse.y = y;
            } else {
                mouse.x = -1000;
                mouse.y = -1000;
            }
        };

        window.addEventListener("mousemove", handleWindowMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleWindowMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [color, trailOpacity, particleCount, speed]);

    return (
        <div ref={containerRef} className={cn("absolute inset-0 pointer-events-none z-0", className)}>
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
