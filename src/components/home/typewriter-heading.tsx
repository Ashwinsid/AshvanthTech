'use client';

import { useState, useEffect } from 'react';

export function TypewriterHeading({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  const [part1, part2] = displayedText.split('\n');

  return (
    <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter min-h-[144px] md:min-h-[156px] lg:min-h-[192px]">
      {part1}
      {part2 && <br />}
      {part2}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
