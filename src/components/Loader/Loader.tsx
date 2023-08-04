import { ThreeDots } from 'react-loader-spinner';
import { BaseBox } from 'components/Box/Box';

const Loader = () => {
  return (
    <BaseBox>
      <ThreeDots color="#ff751d" height={150} width={150} ariaLabel="three-dots-loading" />
    </BaseBox>
  );
};

export default Loader;
