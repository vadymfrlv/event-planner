import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface TextProps {
  $priorityLevel?: string;
}

const sharedStyles = css`
  padding: 6px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;
`;

export const EventListItemStyled = styled.li`
  position: relative;
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

export const CategoryPriorityWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
`;

export const EventCategory = styled.span`
  ${sharedStyles}
  margin-right: 12px;
  color: ${p => p.theme.colors.accent};
`;

export const EventPriority = styled.span<TextProps>`
  ${sharedStyles}
  color: ${p => {
    if (p.$priorityLevel === 'medium') {
      return p.theme.colors.medium;
    } else if (p.$priorityLevel === 'high') {
      return p.theme.colors.high;
    } else {
      return p.theme.colors.low;
    }
  }};
`;

export const EventPicture = styled.img`
  height: 336px;
  width: 272px;

  object-fit: cover;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 332px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 302px;
  }
`;
