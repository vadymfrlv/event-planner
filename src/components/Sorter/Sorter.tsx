import React, { useState } from 'react';

import { sortOptions } from 'constants/sortOptions';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

import {
  SorterContainer,
  SorterButton,
  SorterOptions,
  SorterOption,
  ExpandLessIconStyled,
  ExpandMoreIconStyled,
} from './Sorter.styled';

export const Sorter = () => {
  const [currentSort, setCurrentSort] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortByOption: string) => {
    setCurrentSort(sortByOption);
    setIsDropdownOpen(false);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <SorterContainer>
        <SorterButton $sorterOptions={isDropdownOpen} onClick={toggleDropdown}>
          {currentSort}
          {isDropdownOpen ? <ExpandLessIconStyled /> : <ExpandMoreIconStyled />}
        </SorterButton>

        <SorterOptions $sorterOptions={isDropdownOpen}>
          {sortOptions.map(({ value, label }, idx) => (
            <SorterOption key={idx} onClick={() => handleSortChange(value)}>
              {label}
            </SorterOption>
          ))}
        </SorterOptions>
      </SorterContainer>
    </ClickOutsideWrapper>
  );
};
