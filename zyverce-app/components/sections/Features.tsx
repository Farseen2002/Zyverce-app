"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, UserCheck, Zap, Server, Activity, ArrowUpRight } from "lucide-react"; // Replaced custom icons with Lucide for simplicity if original txt didn't import specific ones or meant placeholders. 
// Wait, why_choose_Zyverce.txt imported React.ElementType but didn't import icons? 
// No, it imported icons in the usage part which was not fully shown in previous `view_file`.
// The previous view_file of `why_choose_Zyverce.txt` showed `interface FeaturesProps` but not the data.
// It seems `why_choose_Zyverce.txt` was incomplete or I missed the usage data array.
// I will create a default data set for Features based on the prompt "Reliable & Scalable", "Expert Support", "Future-Ready Solutions".

interface FeaturesProps {
    features?: {
        id: number;
        icon: React.ElementType;
        title: string;
        description: string;
        image: string;
    }[];
    primaryColor?: string;
    progressGradientLight?: string;
    progressGradientDark?: string;
}

const defaultFeatures = [
    {
        id: 1,
        icon: Server,
        title: "Reliable & Scalable",
        description: "Our systems are built to handle growth, ensuring consistent performance as your institution expands.",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2695&auto=format&fit=crop"
    },
    {
        id: 2,
        icon: UserCheck,
        title: "Expert Support",
        description: "Dedicated support team to assist you at every step of your digital transformation journey.",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
    },
    {
        id: 3,
        icon: Zap,
        title: "Future-Ready Solutions",
        description: "Stay ahead with cutting-edge technologies like AI, Robotics, and advanced analytics integrated into our platforms.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2670&auto=format&fit=crop"
    }
];

export function Features({
    features = defaultFeatures,
    primaryColor = "sky-500",
    progressGradientLight = "bg-sky-500",
    progressGradientDark = "bg-sky-500",
}: FeaturesProps) {
    const [currentFeature, setCurrentFeature] = useState(0);
    const [progress, setProgress] = useState(0);
    const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                setCurrentFeature((prev) => (prev + 1) % features.length);
                setProgress(0);
            }, 200);
        }
    }, [progress]);

    useEffect(() => {
        const activeFeatureElement = featureRefs.current[currentFeature];
        const container = containerRef.current;

        if (activeFeatureElement && container) {
            const containerRect = container.getBoundingClientRect();
            const elementRect = activeFeatureElement.getBoundingClientRect();

            container.scrollTo({
                left:
                    activeFeatureElement.offsetLeft -
                    (containerRect.width - elementRect.width) / 2,
                behavior: "smooth",
            });
        }
    }, [currentFeature]);

    const handleFeatureClick = (index: number) => {
        setCurrentFeature(index);
        setProgress(0);
    };

    return (
        <div className="min-h-screen py-16 px-4 bg-transparent relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <span
                        className={`text-sky-500 font-semibold text-sm uppercase tracking-wider`}
                    >
                        Why Choose ZYVERCE
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-500 mt-4 mb-6">
                        Empowering Education with Technology
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 lg:gap-16 gap-8   items-center">
                    {/* Left Side - Features with Progress Lines */}
                    <div
                        ref={containerRef}
                        className="lg:space-y-8 md:space-x-6 lg:space-x-0 overflow-x-auto overflow-hidden no-scrollbar lg:overflow-visible flex lg:flex lg:flex-col flex-row order-1 pb-4 scroll-smooth"
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            const isActive = currentFeature === index;

                            return (
                                <div
                                    key={feature.id}
                                    ref={(el) => {
                                        featureRefs.current[index] = el;
                                    }}
                                    className="relative cursor-pointer flex-shrink-0"
                                    onClick={() => handleFeatureClick(index)}
                                >
                                    {/* Feature Content */}
                                    <div
                                        className={`
                    flex lg:flex-row flex-col items-start space-x-4 p-3 max-w-sm md:max-w-sm lg:max-w-2xl transition-all duration-300 rounded-xl
                    ${isActive
                                                ? " bg-neutral-100 border-l-4 border-indigo-500 "
                                                : " opacity-60 hover:opacity-100 hover:bg-neutral-50 "
                                            }
                  `}
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`
                      p-3  hidden md:block rounded-full transition-all duration-300
                      ${isActive
                                                    ? `bg-indigo-100 text-indigo-600`
                                                    : `bg-neutral-100 text-neutral-400`
                                                }
                    `}
                                        >
                                            <Icon size={24} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3
                                                className={`
                        text-lg md:mt-4 lg:mt-0 font-semibold mb-2 transition-colors duration-300
                        ${isActive
                                                        ? "text-neutral-900"
                                                        : "text-neutral-500"
                                                    }
                      `}
                                            >
                                                {feature.title}
                                            </h3>
                                            <p
                                                className={`
                        transition-colors duration-300 text-sm
                        ${isActive
                                                        ? "text-neutral-600"
                                                        : "text-neutral-400"
                                                    }
                      `}
                                            >
                                                {feature.description}
                                            </p>
                                            <div className="mt-4 bg-white/10 rounded-sm   h-1 overflow-hidden">
                                                {isActive && (
                                                    <motion.div
                                                        className={`h-full bg-indigo-500`}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${progress}%` }}
                                                        transition={{ duration: 0.1, ease: "linear" }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side - Image Display */}
                    <div className="relative order-1 max-w-lg mx-auto lg:order-2">
                        <motion.div
                            key={currentFeature}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30"></div>
                            <Image
                                className="relative rounded-2xl border border-white/10 shadow-2xl"
                                src={features[currentFeature].image}
                                alt={features[currentFeature].title}
                                width={600}
                                height={400}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
