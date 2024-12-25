import React, { useState, useEffect } from 'react';
import './HomeInfo.css';

const HomeInfo = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = ['Developer', 'Coder', 'Tech Enthusiast'];

  useEffect(() => {
    let timeout;

    if (currentIndex < texts.length) {
      const currentWord = texts[currentIndex];
      timeout = setTimeout(() => {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Pause before moving to the next word
          timeout = setTimeout(() => {
            setCurrentText('');
            setCurrentIndex((prevIndex) =>
              prevIndex + 1 === texts.length ? 0 : prevIndex + 1
            );
          }, 1000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, texts]);

  return (
    <div className="home-info-container">
      <h1 className="name">Ahmad Kaif</h1>
      <h2 className="typewriter">{currentText}</h2>
    </div>
  );
};

export default HomeInfo;
