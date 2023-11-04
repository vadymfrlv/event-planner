import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 40px;
  padding: 10px 15px;
  background-color: #ffffff;

  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-left: auto;
    box-sizing: border-box;
    width: 332px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-left: auto;
    box-sizing: border-box;
    width: 302px;
  }
`;

export const Button = styled.button`
  background-color: #ffffff;
  margin-bottom: 5px;

  padding: 10px 20px;
  cursor: pointer;
  font-size: 23px;
  line-height: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.accent};
  transition: background-color 0.3s ease;

  &:hover {
    color: ${p => p.theme.colors.btnHover};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const PageText = styled.span`
  width: 40px;
  text-align: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 23px;
  color: #7b61ff;
`;
