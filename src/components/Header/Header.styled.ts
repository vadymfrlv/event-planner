import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${p => p.theme.colors.main};
  border-bottom: ${p => p.theme.borders.headerFooter};

  z-index: ${p => p.theme.zIndices[1]};
`;
