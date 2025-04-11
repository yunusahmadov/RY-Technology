import React, { useState, useRef } from 'react';
import { useLang } from '../contexts/LanguageContext';
import azflag from '../assets/AZ-Azerbaijan-Flag-icon.png'
import enflag from '../assets/Flag_of_the_United_Kingdom.png'


function LanguageSelector() {
  const { language, setLanguage } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const languages = [
    { value: 'az', label: 'AZE', image:azflag },
    { value: 'en', label: 'ENG', image:enflag}
  ];

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200мс задержка перед закрытием
  };

  return (
    <div
      className="custom-select"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="selected">
        {languages.find(l => l.value === language)?.label}
      </div>
      {isOpen && (
        <ul className="options">
          {languages.map((lang) => (
            <li
              key={lang.value}
              className={`option ${lang.value === language ? 'active' : ''}`}
              onClick={() => {
                setLanguage(lang.value);
                setIsOpen(false);
              }}
            >
              <img className='option-lang' src={lang.image} />{lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
