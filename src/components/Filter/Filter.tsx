import React, { useState, useEffect } from 'react';

import { filterOptions } from 'constants/filterOptions';

import {
  LanguageSelectorContainer,
  LanguageSelectorButton,
  LanguageOptions,
  LanguageOption,
  ExpandLessIconStyled,
  ExpandMoreIconStyled,
} from './Filter.styled';

export const FilterBy = () => {
  const [currentFilterBy, setCurrentFilterBy] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleFilterByChange = (filterByOption: string) => {
    setCurrentFilterBy(filterByOption);
    setIsDropdownOpen(false);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorButton $languageOptions={isDropdownOpen} onClick={toggleDropdown}>
        {currentFilterBy}
        {isDropdownOpen ? <ExpandLessIconStyled /> : <ExpandMoreIconStyled />}
      </LanguageSelectorButton>

      <LanguageOptions $languageOptions={isDropdownOpen}>
        {filterOptions.map(({ value, label }) => (
          <LanguageOption key={value} onClick={() => handleFilterByChange(value)}>
            {label}
          </LanguageOption>
        ))}
      </LanguageOptions>
    </LanguageSelectorContainer>
  );
};
