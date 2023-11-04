import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface TextProps {
  $priorityLevel?: string;
  $isDisabled?: boolean;
}

const sharedStylesForCategoryPriority = css`
  padding: 6px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

const sharedStylesForDateTimeLocation = css`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 24px;
`;

export const EventListItemStyled = styled.li`
  position: relative;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-color: ${p => p.theme.colors.white};
  height: 480px;
  overflow: hidden;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 24px;

    @media (min-width: ${p => p.theme.screens.tab}) {
      margin-bottom: 0;
    }
  }

  &:hover {
    & .hover-effect {
      transform: translateY(-104px);

      @media (min-width: ${p => p.theme.screens.tab}) {
        transform: translateY(-96px);
      }
    }
  }
`;

export const CategoryPriorityWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
`;

export const EventCategory = styled.span`
  ${sharedStylesForCategoryPriority}
  margin-right: 12px;
  color: ${p => p.theme.colors.accent};
`;

export const EventPriority = styled.span<TextProps>`
  ${sharedStylesForCategoryPriority}
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

export const EventInfoThumb = styled.div`
  transform: translateY(-40px);
  transition: transform 250ms ease-in-out;
`;

export const DateTimeLocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 8px 16px;

  background-color: rgba(255, 255, 255, 0.8);
`;

export const EventDateAndTime = styled.span`
  ${sharedStylesForDateTimeLocation}
`;

export const EventLocation = styled.span`
  ${sharedStylesForDateTimeLocation}
`;

export const EventTitleDescrWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  padding: 16px;
`;

export const EventTitle = styled.h2`
  margin-bottom: 16px;
  color: ${p => p.theme.colors.eventTitle};
  font-family: ${p => p.theme.fonts.main};
  font-size: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 24px;
  text-transform: capitalize;
`;

export const EventDescr = styled.p`
  margin-bottom: 16px;
  height: 72px;
  color: ${p => p.theme.colors.EventDescr};
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;

  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;
`;

export const MoreInfoLink = styled(Link)<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 114px;
  margin-left: auto;
  box-sizing: border-box;

  padding: 10px 24px;

  border-radius: 8px;
  background-color: ${p => (p.$isDisabled ? p.theme.colors.btnDisabled : p.theme.colors.accent)};
  transition: background-color 250ms ease-in-out;

  color: ${p => p.theme.colors.white};
  font-size: 14px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;

  pointer-events: ${p => (p.$isDisabled ? 'none' : 'all')};

  &:hover {
    background-color: ${p =>
      p.$isDisabled ? p.theme.colors.btnDisabled : p.theme.colors.btnHover};
  }
`;
