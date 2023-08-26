import styled from 'styled-components';
import { LuFilter } from 'react-icons/lu';

interface FilterProps {
  $filterOptions?: boolean;
  $filterSelected?: boolean;
  $active?: boolean;
}

export const FilterContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-right: 24px;
  }
`;

export const FilterSelectorButton = styled.button<FilterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${p => (p.$filterOptions ? '154px' : '56px')};
  height: 56px;
  padding: 16px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 16px;
  border: none;

  color: ${p => (p.$filterSelected ? p.theme.colors.accent : p.theme.colors.text)};

  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  cursor: pointer;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 154px;
  }

  &:hover {
    color: ${p => p.theme.colors.accent};
  }
`;

export const FilterDescription = styled.span<FilterProps>`
  display: ${p => (p.$filterOptions ? 'block' : 'none')};

  @media (min-width: ${p => p.theme.screens.tab}) {
    display: block;
  }
`;

export const FilterIconStyled = styled(LuFilter)`
  width: 24px;
  height: 24px;
`;

export const FilterOptions = styled.ul<FilterProps>`
  position: absolute;
  visibility: ${p => (p.$filterOptions ? 'visible' : 'hidden')};
  top: ${p => (p.$filterOptions ? '63px' : '48px')};
  left: 0;
  margin: 0 auto;
  width: 154px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$filterOptions ? 1 : 0)};
  transition: top 250ms ease-in-out, opacity 300ms ease-in-out;
`;

export const FilterOption = styled.li<FilterProps>`
  font-size: 14px;
  line-height: 20px;
  color: ${p => (p.$active ? p.theme.colors.accent : p.theme.colors.divider)};
  cursor: pointer;
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 8px 24px;

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
