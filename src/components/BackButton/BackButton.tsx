import { useLocation } from 'react-router-dom';
import { StyledBackBtn, IconBack } from './BackButton.styled';

export const BackButton = () => {
  const linkLocation = useLocation();
  const backLinkHref = linkLocation?.state?.from ?? '/';

  return (
    <StyledBackBtn type="button" to={backLinkHref}>
      <IconBack />
      Back
    </StyledBackBtn>
  );
};
