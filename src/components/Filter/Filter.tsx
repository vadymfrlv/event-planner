import React, { useState } from 'react';

import { filterOptions } from 'constants/filterOptions';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

import {
  FilterContainer,
  FilterSelectorButton,
  FilterDescription,
  FilterOptions,
  FilterOption,
  FilterIconStyled,
} from './Filter.styled';

export const Filter = () => {
  const [currentFilter, setCurrentFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleFilterChange = (filterOption: string) => {
    const transformedFilterOption = filterOption.charAt(0).toUpperCase() + filterOption.slice(1);

    if (currentFilter === transformedFilterOption) {
      setCurrentFilter('');
      setIsDropdownOpen(false);
      return;
    }

    setCurrentFilter(transformedFilterOption);
    setIsDropdownOpen(false);
  };

  const toggleFilterDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <FilterContainer>
        <FilterSelectorButton
          $filterOptions={isDropdownOpen}
          $filterSelected={!!currentFilter}
          onClick={toggleFilterDropdown}
        >
          <FilterDescription $filterOptions={isDropdownOpen}>
            {currentFilter || 'Category'}
          </FilterDescription>
          <FilterIconStyled />
        </FilterSelectorButton>

        <FilterOptions $filterOptions={isDropdownOpen}>
          {filterOptions.map(({ value, label }) => (
            <FilterOption
              key={value}
              $active={currentFilter === label}
              onClick={() => handleFilterChange(value)}
            >
              {label}
            </FilterOption>
          ))}
        </FilterOptions>
      </FilterContainer>
    </ClickOutsideWrapper>
  );
};
