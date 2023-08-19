import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { LuPlus } from 'react-icons/lu';

const sharedStyles = css`
  padding: 16px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.accent};
  font-family: 'Poppins';
  font-weight: 500;
  border-radius: 8px;
  @media (min-width: ${p => p.theme.screens.tab}) {
    padding: 16px 12px;
  }
`;

export const AddIcon = styled(LuPlus)`
  margin-right: 0;
  height: 24px;
  width: 24px;
  color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-right: 16px;
  }
`;

export const ActionLinkStyled = styled(Link)`
  ${sharedStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  font-size: 16px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition: background-color 250ms ease-in-out;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 169px;
  }
  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
`;

export const ActionBtnStyled = styled.button`
  ${sharedStyles}

  font-size: 16px;

  border: none;
`;

export const DescriptionStyled = styled.span`
  display: none;

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
  }
`;
