import styled, { css } from 'styled-components';

interface TextProps {
  $priorityLevel?: string;
  $isDisabled?: boolean;
}

const sharedStyles = css`
  margin: 6px;
  padding: 6px 12px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.eight};

  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 20px;

  color: ${p => p.theme.colors.accent};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto 0;

  @media (min-width: ${p => p.theme.screens.note}) {
    width: 628px;
    margin: 17px auto 0;
  }
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-family: ${p => p.theme.fonts.main};
  font-size: 24px;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  line-height: normal;
  margin-right: auto;

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 32px;
  }
`;

export const EventThumb = styled.div`
  margin-top: 24px;

  border-radius: ${p => p.theme.radii.eight};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  overflow: hidden;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 688px;
  }

  @media (min-width: ${p => p.theme.screens.note}) {
    width: 628px;
    font-size: 14px;
  }
`;

export const EventPicture = styled.img`
  height: 168px;
  width: 100%;

  object-fit: cover;

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 272px;
  }
`;

export const EventInfoThumb = styled.div`
  padding: 20px 16px 40px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding: 20px 24px 40px;
  }
`;

export const EventDescr = styled.p`
  margin-bottom: 24px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 14px;
  line-height: 20px;

  color: ${p => p.theme.colors.EventDescr};
`;

export const EventDetailsThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
`;

export const EventCategory = styled.span`
  ${sharedStyles}
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

export const EventLocation = styled.span`
  ${sharedStyles}
`;

export const EventDateAndTime = styled.span`
  ${sharedStyles}
`;

export const EventBtnsThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 40px;

  @media (min-width: ${p => p.theme.screens.note}) {
    margin-top: 24px;
  }
`;

export const EventEditBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 32px;
  width: 108px;
  margin-right: 12px;
  padding: 8px 16px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 16px;

  color: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.white};
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors.accent};

  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;

  &:hover {
    color: ${p => p.theme.colors.btnHover};
    border: 1px solid ${p => p.theme.colors.btnHover};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 55px;
    margin-right: 8px;
  }
`;

export const EventDeleteBtn = styled.button`
  box-sizing: border-box;
  height: 32px;
  width: 108px;

  margin-left: 12px;
  padding: 8px 16px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: ${p => p.theme.colors.white};
  background: ${p => p.theme.colors.accent};
  border-radius: 4px;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-left: 8px;
  }
`;
