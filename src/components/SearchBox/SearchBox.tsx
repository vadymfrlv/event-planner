import { useState } from 'react';
import { SearchBoxWrapper, InputStyled, SearchIcon, CloseIcon } from './SearchBox.styled';

export const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchBoxWrapper>
      <InputStyled
        type="text"
        placeholder="Search by keywords"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <SearchIcon />
      {searchQuery && <CloseIcon type="button" onClick={() => setSearchQuery('')} />}
    </SearchBoxWrapper>
  );
};
