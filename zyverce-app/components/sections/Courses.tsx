import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Clock, Star, ArrowRight } from 'lucide-react';

const courses = [
    {
        title: 'AI Fundamentals',
        level: 'Beginner',
        duration: '8 weeks',
        rating: 4.8,
        price: '₹4,999',
        image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80'
    },
    {
        title: 'Machine Learning Mastery',
        level: 'Intermediate',
        duration: '12 weeks',
        rating: 4.9,
        price: '₹8,999',
        image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80'
    },
    {
        title: 'Python for Kids',
        level: 'Beginner',
        duration: '6 weeks',
        rating: 4.7,
        price: '₹3,499',
        image: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?w=600'
    },
    {
        title: 'Web Development Bootcamp',
        level: 'Beginner',
        duration: '16 weeks',
        rating: 4.9,
        price: '₹12,999',
        image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=600&q=80'
    }
];

const getLevelColor = (level: string) => {
    switch (level) {
        case 'Beginner':
            return 'bg-green-500/10 text-green-400';
        case 'Intermediate':
            return 'bg-yellow-500/10 text-yellow-400';
        case 'Advanced':
            return 'bg-red-500/10 text-red-400';
        default:
            return 'bg-primary/10 text-primary';
    }
};

const CoursesSection = () => {
    return (
        <section id="courses" className="py-24 relative">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        Learn With Us
                    </span>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                        Featured Courses
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Start your learning journey today with our expert-led courses
                    </p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {courses.map((course, index) => (
                        <AnimatedSection key={course.title} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -8 }}
                                className="group rounded-2xl overflow-hidden border border-border bg-card"
                            >
                                {/* Image */}
                                <div className="relative h-44 overflow-hidden">
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                                    <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                                        {course.level}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-1">
                                        {course.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {course.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                            {course.rating}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="font-display text-xl font-bold text-primary">
                                            {course.price}
                                        </span>
                                        <motion.button
                                            whileHover={{ x: 5 }}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.4} className="text-center mt-12">
                    <a href="#" className="btn-outline inline-flex items-center gap-2">
                        View All Courses
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default CoursesSection;
