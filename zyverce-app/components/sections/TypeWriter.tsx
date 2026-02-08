"use client";
import { useState, useEffect } from 'react';

interface TypeWriterProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
}

const TypeWriter = ({
    texts,
    speed = 100,
    deleteSpeed = 50,
    pauseTime = 1500
}: TypeWriterProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[index];

        const handleTyping = () => {
            if (isDeleting) {
                setDisplayedText((prev) => prev.substring(0, prev.length - 1));
            } else {
                setDisplayedText((prev) => currentText.substring(0, prev.length + 1));
            }
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && displayedText === currentText) {
            // Finished typing, wait before deleting
            timer = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayedText === '') {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        } else {
            // Typing or deleting
            timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : speed);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, index, texts, speed, deleteSpeed, pauseTime]);

    return <span>{displayedText}|</span>;
};

export default TypeWriter;
