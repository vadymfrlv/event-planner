import styled, { css } from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface SorterOptionsProps {
  $sorterOptions?: boolean;
  $sorterSelected?: boolean;
  $active?: boolean;
}

// const expandIconBaseStyles = css`
//   margin-left: 4px;
//   width: 24px;
//   height: 24px;
//   color: ${p => p.theme.colors.text};
// `;

export const SorterContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-right: 24px;
  }
`;

export const SorterButton = styled.button<SorterOptionsProps>`
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
  box-shadow: ${p => p.theme.shadows.elements};
  cursor: pointer;
`;

// export const ExpandMoreIconStyled = styled(MdExpandMore)`
//   ${expandIconBaseStyles}
// `;

// export const ExpandLessIconStyled = styled(MdExpandLess)`
//   ${expandIconBaseStyles}
// `;

export const SorterOptions = styled.ul<SorterOptionsProps>`
  position: absolute;
  display: ${p => (p.$sorterOptions ? 'block' : 'none')};
  top: ${p => (p.$sorterOptions ? '63px' : '48px')};
  left: 0;
  padding: 16px 12px;
  margin: 0 auto;
  width: 45px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$sorterOptions ? 1 : 0)};
  transition: top 250ms ease-in-out, opacity 300ms ease-in-out;
`;

export const SorterOption = styled.li`
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
