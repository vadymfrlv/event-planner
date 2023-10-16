import styled from 'styled-components';

export const PagePanelWrapper = styled.div`
  @media (min-width: ${p => p.theme.screens.note}) {
    display: flex;
    align-items: center;
  }
`;

export const PagePanelBtnsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 100;

  @media (min-width: ${p => p.theme.screens.note}) {
    position: static;
  }
`;
