import React, { useState, useEffect } from 'react';

import { sortOptions } from 'constants/sortOptions';

import {
  LanguageSelectorContainer,
  LanguageSelectorButton,
  LanguageOptions,
  LanguageOption,
  ExpandLessIconStyled,
  ExpandMoreIconStyled,
} from './Sorter.styled';

export const SortBy = () => {
  const [currentSortBy, setCurrentSortBy] = useState('');
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

  const handleSortByChange = (sortByOption: string) => {
    setCurrentSortBy(sortByOption);
    setIsDropdownOpen(false);
  };

  return (
    <LanguageSelectorContainer>
      <LanguageSelectorButton $languageOptions={isDropdownOpen} onClick={toggleDropdown}>
        {currentSortBy}
        {isDropdownOpen ? <ExpandLessIconStyled /> : <ExpandMoreIconStyled />}
      </LanguageSelectorButton>

      <LanguageOptions $languageOptions={isDropdownOpen}>
        {sortOptions.map(({ value, label }, idx) => (
          <LanguageOption key={idx} onClick={() => handleSortByChange(value)}>
            {label}
          </LanguageOption>
        ))}
      </LanguageOptions>
    </LanguageSelectorContainer>
  );
};
