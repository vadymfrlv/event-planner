import styled from 'styled-components';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Link } from 'react-router-dom';

export const StyledBackBtn = styled(Link)`
  position: static;

  display: inline-flex;
  align-items: center;

  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.main};
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  transition: color 250ms ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.btnHover};
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    position: absolute;
    top: 100px;
  }
`;

export const IconBack = styled(AiOutlineArrowLeft)`
  height: 24px;
  width: 24px;
  margin-right: 5px;
`;
