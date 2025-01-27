import React, { useState, useEffect } from 'react';
import { Image } from 'astro:assets';

const ThemeImage = ({ light, dark, alt, width = 500, height = 300 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(matchMedia.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);
  }, []);

  return <Image src={isDarkMode ? dark : light} alt={alt} width={width} height={height} />;
};

export default ThemeImage;