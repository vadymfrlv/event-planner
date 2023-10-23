import styled, { css } from 'styled-components';

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

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 24px;

  @media (min-width: ${p => p.theme.screens.note}) {
    padding-top: 17px;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.main};
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 32px;
  }
`;

export const EventInfoThumb = styled.div`
  padding: 10px;
`;

export const EventPicture = styled.img`
  height: 168px;
  width: 272px;

  object-fit: cover;

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 272px;
    width: 688px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    width: 628px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    height: 348px;
    width: 800px;
  }
`;

export const EventDescr = styled.p`
  padding-bottom: 16px;
  height: 72px;
  color: ${p => p.theme.colors.EventDescr};
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;

  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: 20px;
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

export const EventDateAndTime = styled.span`
  ${sharedStylesForDateTimeLocation}
`;

export const EventLocation = styled.span`
  ${sharedStylesForDateTimeLocation}
`;
