import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #5e5e5e;
  padding: 10px 17px;
  border-radius: 10px;
  width: 200px;
  margin-top: 20px;
  margin-left: auto;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #91ff00;
  font-size: 23px;
  cursor: pointer;
  transition: color 0.3s;

  &:disabled {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const PageText = styled.span`
  margin: 0 12px;
  color: #91ff00;
  font-size: 23px;
`;
