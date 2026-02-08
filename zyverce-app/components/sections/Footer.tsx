"use client";
import React from "react";
import Link from "next/link";
import {
    FileText,
    Twitter,
    Linkedin,
    Github,
    Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
    label: string;
    href: string;
}

interface SocialLink {
    icon: React.ReactNode;
    href: string;
    label: string;
}

interface FooterProps {
    brandName?: string;
    brandDescription?: string;
    socialLinks?: SocialLink[];
    navLinks?: FooterLink[];
    creatorName?: string;
    creatorUrl?: string;
    brandIcon?: React.ReactNode;
    className?: string;
}

export const Footer = ({
    brandName = "ZYVERCE",
    brandDescription = "Digital Platforms & Education",
    socialLinks = [],
    navLinks = [],
    creatorName,
    creatorUrl,
    brandIcon,
    className,
}: FooterProps) => {
    return (
        <section className={cn("relative w-full mt-0 overflow-hidden", className)}>
            <footer className="border-t bg-background mt-20 relative">
                <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-[30rem] sm:min-h-[35rem] md:min-h-[40rem] relative z-10 p-4 py-10">
                    <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
                        <div className="w-full flex flex-col items-center">
                            <div className="space-y-2 flex flex-col items-center flex-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-foreground text-3xl font-bold">
                                        {brandName}
                                    </span>
                                </div>
                                <p className="text-muted-foreground font-semibold text-center w-full max-w-sm sm:w-96 px-4 sm:px-0">
                                    {brandDescription}
                                </p>
                            </div>

                            <div className="flex mb-8 mt-3 gap-4">
                                <Link href="https://twitter.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter className="w-6 h-6 hover:scale-110 duration-300" /></Link>
                                <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin className="w-6 h-6 hover:scale-110 duration-300" /></Link>
                                <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-6 h-6 hover:scale-110 duration-300" /></Link>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-muted-foreground max-w-full px-4">
                                <Link href="#home" className="hover:text-foreground duration-300 hover:font-semibold">Home</Link>
                                <Link href="#services" className="hover:text-foreground duration-300 hover:font-semibold">Services</Link>
                                <Link href="#products" className="hover:text-foreground duration-300 hover:font-semibold">Products</Link>
                                <Link href="#contact" className="hover:text-foreground duration-300 hover:font-semibold">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 md:mt-24 flex flex-col gap-2 md:gap-1 items-center justify-center md:flex-row md:items-center md:justify-between px-4 md:px-0">
                        <p className="text-base text-muted-foreground text-center md:text-left">
                            ©{new Date().getFullYear()} {brandName}. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Large background text - FIXED */}
                <div
                    className="bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-40 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
                    style={{
                        fontSize: 'clamp(3rem, 12vw, 10rem)',
                        maxWidth: '95vw'
                    }}
                >
                    {brandName.toUpperCase()}
                </div>

                {/* Bottom logo */}
                <div className="absolute hover:border-foreground duration-400 drop-shadow-[0_0px_20px_rgba(0,0,0,0.5)] dark:drop-shadow-[0_0px_20px_rgba(255,255,255,0.3)] bottom-24 md:bottom-20 backdrop-blur-sm rounded-3xl bg-background/60 left-1/2 border-2 border-border flex items-center justify-center p-3 -translate-x-1/2 z-10">
                    <div className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-foreground to-foreground/80 rounded-2xl flex items-center justify-center shadow-lg">
                        {brandIcon || (
                            <FileText className="w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 text-background drop-shadow-lg" />
                        )}
                    </div>
                </div>

                {/* Bottom line */}
                <div className="absolute bottom-32 sm:bottom-34 backdrop-blur-sm h-1 bg-gradient-to-r from-transparent via-border to-transparent w-full left-1/2 -translate-x-1/2"></div>

                {/* Bottom shadow */}
                <div className="bg-gradient-to-t from-background via-background/80 blur-[1em] to-background/40 absolute bottom-28 w-full h-24"></div>
            </footer>
        </section>
    );
};
