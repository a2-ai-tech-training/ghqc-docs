document.addEventListener('DOMContentLoaded', (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const word = document.querySelector("#changing_text");
    const texts = ["Pharmacometricians", "Clinical Pharmacologists", "Quantitative System Pharmacologists", "Data Scientists"];
    let textIndex = 0;
  
    let isAnimating = false;
    let rafID;
    let then = Date.now();
    const interval = 10;
  
    const animate = () => {
      isAnimating = true;
      let iterations = 0;
      const originalText = texts[textIndex];
  
      const changeLetter = () => {
        let now = Date.now();
        let elapsed = now - then;
  
        if (elapsed > interval) {
          word.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return originalText[index];
              }
              if (letter == " ") {
                return " ";
              }
              return letters[Math.floor(Math.random() * 22)];
            })
            .join("");
  
          iterations += 1 / 3;
          then = now - (elapsed % interval);
        }
  
        if (iterations < word.innerText.length && isAnimating) {
          rafID = requestAnimationFrame(changeLetter);
        }
      }
  
      rafID = requestAnimationFrame(changeLetter);
    }
  
    animate();
  
    setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      if (!document.hidden) {
        animate();
      }
    }, 4000);
  
    document.addEventListener('visibilitychange', function() {
      if (document.hidden) {
        isAnimating = false;
        cancelAnimationFrame(rafID);
      } else {
        animate();
      }
    });
  });

import { useState, useEffect } from 'react';
import { Image } from 'astro:assets';

const ThemeImage = ({ light, dark, alt }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  return <Image src={isDarkMode ? dark : light} alt={alt} />;
};

export default ThemeImage;