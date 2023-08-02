import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.background};
  border-bottom: ${p => p.theme.borders.header};
`;

export const Logo = styled.span`
  font-family: ${p => p.theme.fonts.logo};
  font-size: ${p => p.theme.fontSizes[0]}px;

  color: ${p => p.theme.colors.accent};
`;
