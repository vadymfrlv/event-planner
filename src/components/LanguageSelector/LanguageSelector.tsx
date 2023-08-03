import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

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

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {i18n.language.toUpperCase()}
        {isDropdownOpen ? <ExpandLessIconStyled /> : <ExpandMoreIconStyled />}
      </LanguageSelectorButton>

      {isDropdownOpen && (
        <LanguageOptions>
          {languages.map(({ value, label }) => (
            <LanguageOption key={value} onClick={() => handleLanguageChange(value)}>
              {label}
            </LanguageOption>
          ))}
        </LanguageOptions>
      )}
    </LanguageSelectorContainer>
  );
};
