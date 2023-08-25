import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { languages } from 'constants/languages';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

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

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language.toUpperCase());
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <LanguageSelectorContainer>
        <LanguageSelectorButton onClick={toggleDropdown}>
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
    </ClickOutsideWrapper>
  );
};
