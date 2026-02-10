"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function OurMission() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                            Redefining the <br />
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-primary">
                                Possible
                            </span>
                        </h1>
                    </>
                }
            >
                <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-4">
                    {/* Left Side: Image with Overlay */}
                    <div className="relative h-full w-full rounded-2xl overflow-hidden bg-zinc-800">
                        {/* Placeholder for now, replace with actual image asset if available */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        <Image
                            src="/images/mission-bg.jpg" // Assuming we might have some image, or fallback to placeholder
                            alt="Our Mission"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                // Fallback purely via code if image fails
                                e.currentTarget.style.display = "none";
                                e.currentTarget.parentElement!.style.backgroundColor = "#27272a";
                            }}
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                            <p className="text-sm text-zinc-300 max-w-xs">
                                To cultivate a calm, intelligent digital ecosystem where innovation thrives.
                            </p>
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col justify-center p-6 md:p-10 bg-zinc-900 rounded-2xl">
                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            At ZYVERCE, we are more than just a tech company. We are architects of the future. Our team combines deep technical expertise with a passion for education to create solutions that matter.
                        </p>
                        <p className="text-zinc-400 mb-10 leading-relaxed">
                            From advanced Learning Management Systems (LMS) that revolutionize classrooms to robotics programs that inspire the next generation of engineers, we provide the tools needed to succeed in a digital world.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                                <div className="text-3xl font-bold text-white mb-1">50+</div>
                                <div className="text-xs text-zinc-400 uppercase tracking-wider">Schools Partnered</div>
                            </div>
                            <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                                <div className="text-xs text-zinc-400 uppercase tracking-wider">Students Impacted</div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerScroll>
        </div>
    );
}
