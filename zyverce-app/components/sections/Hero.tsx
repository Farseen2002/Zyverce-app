"use client";
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import { ArrowRight, Sparkles } from 'lucide-react';
import NeuralBackground from '../ui/neural-background';

export const HeroSection = () => {
    const typingTexts = [
        'LMS & AMS Systems',
        'Web Development',
        'AI & Robotics Courses',
        'Digital Learning Solutions'
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden aurora-bg pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <NeuralBackground
                color="#8b5cf6" // Violet-500 equivalent for good visibility 
                trailOpacity={0.4} // Higher opacity since we are using destination-out which is subtle
                speed={0.5}
                className="opacity-60" // Slight transparency to blend
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Transforming Education</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
                    >
                        Building the future
                        <br />
                        with{' '}
                        <span className="text-primary">
                            <TypeWriter texts={typingTexts} speed={80} deleteSpeed={40} pauseTime={2500} />
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
                    >
                        Innovative learning management solutions and cutting-edge technology courses
                        designed to empower schools and learners worldwide.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <a href="#courses" className="btn-primary inline-flex items-center justify-center gap-2">
                            Explore Courses
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
