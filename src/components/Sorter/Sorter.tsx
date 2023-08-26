import React, { useState } from 'react';

import { sortOptions } from 'constants/sortOptions';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

import {
  LanguageSelectorContainer,
  LanguageSelectorButton,
  LanguageOptions,
  LanguageOption,
  ExpandLessIconStyled,
  ExpandMoreIconStyled,
} from './Sorter.styled';

export const Sorter = () => {
  const [currentSortBy, setCurrentSortBy] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortByChange = (sortByOption: string) => {
    setCurrentSortBy(sortByOption);
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
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
    </ClickOutsideWrapper>
  );
};
