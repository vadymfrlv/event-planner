import { BaseBox } from 'components/Box/Box';
import { LoaderWrapper, LoaderBlock } from './Loader.styled';

export const Loader = () => {
  const blocks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const delay = 0.065;

  return (
    <BaseBox display="flex" justifyContent="center">
      <LoaderWrapper>
        {blocks.map(index => (
          <LoaderBlock
            key={index}
            style={{
              animationDelay: `${index === 9 ? 0 : index * delay}s`,
            }}
          />
        ))}
      </LoaderWrapper>
    </BaseBox>
  );
};
