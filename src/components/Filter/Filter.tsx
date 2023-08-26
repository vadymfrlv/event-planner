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
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);

  const handleFilterChange = (filterOption: string) => {
    const transformedFilterOption = filterOption.charAt(0).toUpperCase() + filterOption.slice(1);

    if (currentFilter === transformedFilterOption) {
      setCurrentFilter('');
      setIsFilterDropdownOpen(false);
      return;
    }

    setCurrentFilter(transformedFilterOption);
    setIsFilterDropdownOpen(false);
  };

  const toggleFilterDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsFilterDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <FilterContainer>
        <FilterSelectorButton
          $filterOptions={isFilterDropdownOpen}
          $filterSelected={!!currentFilter}
          onClick={toggleFilterDropdown}
        >
          <FilterDescription $filterOptions={isFilterDropdownOpen}>
            {currentFilter || 'Category'}
          </FilterDescription>
          <FilterIconStyled />
        </FilterSelectorButton>

        <FilterOptions $filterOptions={isFilterDropdownOpen}>
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
