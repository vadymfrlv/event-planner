import styled, { css } from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

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

export const LanguageSelectorButton = styled.button`
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

export const LanguageOptions = styled.ul`
  position: absolute;

  top: 63px;
  left: 0;
  padding: 16px 12px;
  margin: 0 auto;

  width: 45px;

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};

  z-index: ${p => p.theme.zIndices[5]};
`;

export const LanguageOption = styled.li`
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 4px;
  cursor: pointer;
  border-bottom: ${p => p.theme.borders.listDivider};
  color: ${p => p.theme.colors.divider};

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
    border-bottom: ${p => p.theme.borders.listDividerHover};
  }
`;
