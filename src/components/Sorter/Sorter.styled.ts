import styled, { css } from 'styled-components';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';

interface SorterProps {
  $sorterOptions?: boolean;
  $sorterSelected?: boolean;
  $active?: boolean;
}

const sharedIconsStyle = css`
  width: 24px;
  height: 24px;
`;

export const SorterContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-right: 24px;
  }
`;

export const SorterSelectorBtn = styled.button<SorterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${p => (p.$sorterOptions ? '175px' : '56px')};
  height: 56px;
  padding: 16px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  border: none;

  color: ${p => (p.$sorterSelected ? p.theme.colors.accent : p.theme.colors.text)};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  cursor: pointer;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 175px;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const SorterDescription = styled.span<SorterProps>`
  display: ${p => (p.$sorterOptions ? 'block' : 'none')};

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
  }
`;

export const SorterIconStyled = styled(TbAdjustmentsHorizontal)`
  ${sharedIconsStyle}
`;

// export const SorterIconWrapper = styled(SorterIconStyled)`
//   display: block;

//   @media (min-width: ${p => p.theme.screens.tab}) {
//     display: none;
//   }
// `;

export const SorterOptions = styled.ul<SorterProps>`
  position: absolute;
  visibility: ${p => (p.$sorterOptions ? 'visible' : 'hidden')};
  top: ${p => (p.$sorterOptions ? '63px' : '48px')};
  left: 0;
  margin: 0 auto;
  width: 175px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$sorterOptions ? 1 : 0)};
  transition: top 250ms ease-in-out, opacity 300ms ease-in-out;
`;

export const SorterOption = styled.li<SorterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 20px;
  color: ${p => (p.$active ? p.theme.colors.accent : p.theme.colors.divider)};
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 8px 16px 8px 24px;

  &:not(:last-child) {
    border-bottom: ${p =>
      p.$active ? p.theme.borders.listDividerActive : p.theme.borders.listDivider};
  }

  &:hover {
    color: ${p => p.theme.colors.accent};

    &:not(:last-child) {
      border-bottom: ${p => p.theme.borders.listDividerHover};
    }
  }
`;

export const SorterTypeIncIconStyled = styled(IoIosArrowRoundUp)`
  ${sharedIconsStyle}/* display: none; */

  /* @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
  } */
`;

export const SorterTypeDicIconStyled = styled(IoIosArrowRoundDown)`
  ${sharedIconsStyle}/* display: none; */
  /* @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
  } */
`;
