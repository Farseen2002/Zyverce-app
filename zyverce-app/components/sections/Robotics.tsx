"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface Gallery4Props {
    title?: string;
    description?: string;
    items?: Gallery4Item[];
}

const data = [
    {
        id: "rpi",
        title: "Robotics with Raspberry Pi",
        description:
            "Learn to build and program advanced robots using Raspberry Pi. Master sensors, motors, and computer vision.",
        href: "#robotics",
        image:
            "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "arduino",
        title: "Arduino & ESP32 Embedded",
        description:
            "Deep dive into embedded systems. Create IoT devices and control systems with Arduino and ESP32 microcontrollers.",
        href: "#robotics",
        image:
            "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
        id: "ai-foun",
        title: "AI & Emerging Tech",
        description:
            "Understand the foundations of Artificial Intelligence and how it integrates with physical systems.",
        href: "#robotics",
        image:
            "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
    },
];

export const Robotics = ({
    title = "Our Robotics Programs",
    description = "Hands-on learning experiences designed to spark creativity and engineering skills in students of all ages.",
    items = data,
}: Gallery4Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="py-32 bg-gray-50 dark:bg-neutral-900">
            <div className="container mx-auto">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground">{description}</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                            >
                                <a href={item.href} className="group rounded-xl">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Read more{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index ? "bg-primary" : "bg-primary/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
