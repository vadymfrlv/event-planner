import styled from 'styled-components';

export const ErrorNotificationStyled = styled.p`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  margin: 0;
  text-transform: lowercase;
  text-align: center;
  font-size: 18px;
  font-weight: ${p => p.theme.fontWeights.medium};
  color: #FF4D4D;
  z-index: 500;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 20px;
  }
`;