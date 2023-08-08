import styled, { css } from 'styled-components';

import { CiSearch } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';

export const InputStyled = styled.input`
  width: 272px;
  height: 48px;

  padding: 12px 48px;
  border-radius: 8px;
  border: none;
  outline: none;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  color: ${p => p.theme.colors.placeholders};
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.light};
  line-height: 14px;

  &::placeholder {
    color: ${p => p.theme.colors.placeholders};
    font-family: ${p => p.theme.fonts.main};
    font-size: 14px;
    font-weight: ${p => p.theme.fontWeights.light};
    line-height: 14px;
  }

  box-sizing: border-box;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 368px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 410px;
  }
`;

const expandIconBaseStyles = css`
  display: block;
  position: absolute;
  top: 12px;
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.accent};
`;

export const SearchIcon = styled(CiSearch)`
  ${expandIconBaseStyles};

  left: 12px;
`;

export const CloseIcon = styled(IoIosClose)`
  ${expandIconBaseStyles};

  right: 12px;
`;
