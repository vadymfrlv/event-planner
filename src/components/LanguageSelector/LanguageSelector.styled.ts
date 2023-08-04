import styled, { css } from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface ILanguageOptionsProps {
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
`;

export const LanguageSelectorButton = styled.button<ILanguageOptionsProps>`
  display: flex;
  align-items: center;
  width: 69px;
  padding: 12px 4px 12px 12px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  border: none;

  color: ${p => p.theme.colors.text};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  cursor: pointer;

  &:hover,
  &:focus {
  }
`;

export const ExpandMoreIconStyled = styled(MdExpandMore)`
  ${expandIconBaseStyles}
`;

export const ExpandLessIconStyled = styled(MdExpandLess)`
  ${expandIconBaseStyles}
`;

export const LanguageOptions = styled.ul<ILanguageOptionsProps>`
  position: absolute;
  top: ${p => (p.$languageOptions ? '63px' : '48px')};
  left: 0;
  padding: 16px 12px;
  margin: 0 auto;
  width: 45px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$languageOptions ? 1 : 0)};
  z-index: ${p => p.theme.zIndices[1]};
  transition: opacity 300ms ease-in-out, top 200ms ease-in-out;
  transform: translateY(${p => (p.$languageOptions ? '0' : '1px')});
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
