import React, { useState } from 'react';

import { sortOptions } from 'constants/sortOptions';
import { ClickOutsideWrapper } from 'components/ClickOutsideWrapper/ClickOutsideWrapper';

import {
  SorterContainer,
  SorterSelectorBtn,
  SorterDescription,
  SorterIconStyled,
  SorterIconWrapper,
  SorterTypeIconWrapper,
  SorterOptions,
  SorterOption,
  SorterTypeIncIconStyled,
  SorterTypeDicIconStyled,
} from './Sorter.styled';

export const Sorter = () => {
  const [currentSort, setCurrentSort] = useState('');
  const [currentSortIdx, setCurrentSortIdx] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (sortOption: string, sortIdx: number) => {
    if (currentSortIdx === sortIdx) {
      setCurrentSort('');
      setCurrentSortIdx(null);
      setIsDropdownOpen(false);
      return;
    }

    setCurrentSort(sortOption);
    setCurrentSortIdx(sortIdx);
    setIsDropdownOpen(false);
  };

  const toggleSortDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <ClickOutsideWrapper onClickOutside={handleOutsideClick}>
      <SorterContainer>
        <SorterSelectorBtn
          type="button"
          $sorterOptions={isDropdownOpen}
          $sorterSelected={!!currentSort}
          onClick={toggleSortDropdown}
        >
          <SorterDescription $sorterOptions={isDropdownOpen}>
            Sort by {currentSortIdx != null && sortOptions[currentSortIdx].key}
          </SorterDescription>
          {!currentSort || window.innerWidth < 768 ? <SorterIconStyled /> : null}
          {currentSort && window.innerWidth >= 768 ? (
            currentSort.split(' ')[1] === 'inc' ? (
              <SorterTypeIncIconStyled />
            ) : (
              <SorterTypeDicIconStyled />
            )
          ) : null}
        </SorterSelectorBtn>

        <SorterOptions $sorterOptions={isDropdownOpen}>
          {sortOptions.map(({ value, label, type }, idx) => (
            <SorterOption
              key={idx}
              $active={currentSortIdx === idx}
              onClick={() => handleSortChange(value + ' ' + type, idx)}
            >
              {label}
              {type === 'inc' ? <SorterTypeIncIconStyled /> : <SorterTypeDicIconStyled />}
            </SorterOption>
          ))}
        </SorterOptions>
      </SorterContainer>
    </ClickOutsideWrapper>
  );
};
