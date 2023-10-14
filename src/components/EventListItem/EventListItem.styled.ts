import styled from 'styled-components';

export const EventListItemStyled = styled.li`
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  height: 480px;
  overflow: hidden;
  cursor: pointer;
  background-color: grey;

  &:not(:last-child) {
    margin-bottom: 24px;

    @media (min-width: ${p => p.theme.screens.tab}) {
      margin-bottom: 0;
    }
  }

  &:hover {
    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  }
`;
