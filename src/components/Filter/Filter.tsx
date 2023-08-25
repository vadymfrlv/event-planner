import React, { useState } from 'react';

import { filterOptions } from 'constants/filterOptions';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

import {
  FilterByContainer,
  FilterSelectorButton,
  FilterByOptions,
  FilterByOption,
  FilterByIconStyled,
} from './Filter.styled';

export const FilterBy = () => {
  const [currentFilterBy, setCurrentFilterBy] = useState('');
  const [isFilterByDropdownOpen, setIsFilterByDropdownOpen] = useState(false);

  const toggleFilterByDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFilterByDropdownOpen(!isFilterByDropdownOpen);
  };

  const handleFilterByChange = (filterByOption: string) => {
    setCurrentFilterBy(filterByOption);
    setIsFilterByDropdownOpen(false);
  };

  const handleOutsideClick = () => {
    setIsFilterByDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <FilterByContainer>
        <FilterSelectorButton
          $languageOptions={isFilterByDropdownOpen}
          onClick={toggleFilterByDropdown}
        >
          {currentFilterBy || 'Category'}
          <FilterByIconStyled />
        </FilterSelectorButton>

        <FilterByOptions $languageOptions={isFilterByDropdownOpen}>
          {filterOptions.map(({ value, label }) => (
            <FilterByOption key={value} onClick={() => handleFilterByChange(label)}>
              {label}
            </FilterByOption>
          ))}
        </FilterByOptions>
      </FilterByContainer>
    </ClickOutsideWrapper>
  );
};
