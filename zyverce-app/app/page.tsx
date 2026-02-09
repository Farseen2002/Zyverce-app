import { HeroSection } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Features } from "@/components/sections/Features";
import { Contact } from "@/components/sections/Contact";
import { Robotics } from "@/components/sections/Robotics";
import { Courses } from "@/components/sections/Courses";
import { InfiniteSlider } from "@/components/sections/Logos";

export default function Home() {
    return (
        <div className="flex flex-col bg-white dark:bg-neutral-950">
            <section id="home">
                <HeroSection />
            </section>

            <section id="services">
                <Services />
            </section>

            <section id="products">
                <Products />
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="robotics">
                <Robotics />
            </section>

            <section id="courses">
                <Courses />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
