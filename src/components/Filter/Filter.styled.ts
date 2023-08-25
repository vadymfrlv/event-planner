import styled from 'styled-components';
import { LuFilter } from 'react-icons/lu';

interface ILanguageOptionsProps {
  $languageOptions: boolean;
}

export const FilterByContainer = styled.div`
  position: relative;
  display: inline-block;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-right: 24px;
  }
`;

export const FilterSelectorButton = styled.button<ILanguageOptionsProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 154px;
  height: 56px;
  padding: 16px;
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

export const FilterByIconStyled = styled(LuFilter)`
  width: 24px;
  height: 24px;
  color: ${p => p.theme.colors.text};
`;

export const FilterByOptions = styled.ul<ILanguageOptionsProps>`
  position: absolute;
  display: ${p => (p.$languageOptions ? 'block' : 'none')};
  top: ${p => (p.$languageOptions ? '63px' : '48px')};
  left: 0;
  margin: 0 auto;
  width: 154px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};
  box-shadow: ${p => p.theme.shadows.elements};
  opacity: ${p => (p.$languageOptions ? 1 : 0)};
  transition: top 250ms ease-in-out, opacity 300ms ease-in-out;
`;

export const FilterByOption = styled.li`
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  color: ${p => p.theme.colors.divider};
  font-weight: ${p => p.theme.fontWeights.medium};
  padding: 8px 24px;

  &:not(:last-child) {
    border-bottom: ${p => p.theme.borders.listDivider};
  }

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};

    &:not(:last-child) {
      border-bottom: ${p => p.theme.borders.listDividerHover};
    }
  }
`;
