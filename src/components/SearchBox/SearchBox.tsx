import React from 'react';

import { CloseIcon, InputStyled, SearchIcon } from './SearchBox.styled';
import { BaseBox } from 'components/Box/Box';

export const SearchBox = () => {
  return (
    <BaseBox position="relative">
      <InputStyled type="text" placeholder="Search by keywords" />
      <SearchIcon />
      <CloseIcon />
    </BaseBox>
  );
};
