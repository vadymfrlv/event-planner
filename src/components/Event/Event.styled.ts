import styled from 'styled-components';

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