import styled, { css } from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface LanguageOptionsProps {
  $languageOptions: boolean;
}

const expandIconBaseStyles = css`
  margin-left: 4px;
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.text};
`;

export const LanguageSelectorContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-left: 24px;
  }
`;

export const LanguageSelectorButton = styled.button`
  display: flex;
  align-items: center;
  width: 69px;
  height: 48px;
  padding: 12px 4px 12px 12px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  border: none;

  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  cursor: pointer;
`;

export const ExpandMoreIconStyled = styled(MdExpandMore)`
  ${expandIconBaseStyles}
`;

export const ExpandLessIconStyled = styled(MdExpandLess)`
  ${expandIconBaseStyles}
`;

export const LanguageOptions = styled.ul<LanguageOptionsProps>`
  position: absolute;
  visibility: ${p => (p.$languageOptions ? 'visible' : 'hidden')};
  top: ${p => (p.$languageOptions ? '63px' : '48px')};
  left: 0;
  padding: 16px 12px;
  margin: 0 auto;
  width: 45px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$languageOptions ? 1 : 0)};
  transition: top 250ms ease-in-out, opacity 300ms ease-in-out;
  z-index: 101;
`;

export const LanguageOption = styled.li`
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 4px;
  cursor: pointer;
  border-bottom: ${p => p.theme.borders.listDivider};
  color: ${p => p.theme.colors.divider};
  font-weight: ${p => p.theme.fontWeights.medium};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom: ${p => p.theme.borders.listDividerHover};
  }
`;
