import { useLocation } from 'react-router-dom';
import { StyledBackBtn, IconBack } from './BackButton.styled';

export const BackButton = () => {
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  console.log('Current location:', location);
  console.log('Back link:', backLinkHref);

  return (
    <StyledBackBtn to={backLinkHref}>
      <IconBack />
      Back
    </StyledBackBtn>
  );
};
