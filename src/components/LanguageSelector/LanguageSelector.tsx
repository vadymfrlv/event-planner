import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from 'constants/languages';

import {
  LanguageSelectorContainer,
  LanguageSelectorButton,
  ExpandMoreIconStyled,
  ExpandLessIconStyled,
  LanguageOptions,
  LanguageOption,
} from './LanguageSelector.styled';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language.toUpperCase());

  console.log(isDropdownOpen);

  useEffect(() => {
    const closeDropdown = () => {
      setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language.toUpperCase());
    setIsDropdownOpen(false);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorButton $languageOptions={isDropdownOpen} onClick={toggleDropdown}>
        {currentLanguage}
        {isDropdownOpen ? <ExpandLessIconStyled /> : <ExpandMoreIconStyled />}
      </LanguageSelectorButton>

      <LanguageOptions $languageOptions={isDropdownOpen}>
        {languages.map(({ value, label }) => (
          <LanguageOption key={value} onClick={() => handleLanguageChange(value)}>
            {label}
          </LanguageOption>
        ))}
      </LanguageOptions>
    </LanguageSelectorContainer>
  );
};
