import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setCurrentLanguage(i18n.language.toUpperCase());
  }, [i18n.language]);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorButton
        $languageOptions={isDropdownOpen}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
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