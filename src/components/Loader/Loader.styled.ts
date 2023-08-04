import styled, { keyframes } from 'styled-components';

const blockSize = '2em';
const duration = 0.88;
const startingColor = '#ACA7C3';
const endingColor = '#6243FF';

const blockMargin = `${parseInt(blockSize) / 3}px`;
const gapSize = '50px'; // Gap size between loader blocks
const loaderSize = `calc(3 * ${blockSize} + 2 * ${blockMargin} + 2 * ${gapSize})`;

const showAnimation = keyframes`
  from, 40% {
    opacity: 0;
  }
  41%, to {
    opacity: 1;
  }
`;

const pulseAnimation = keyframes`
  from, 40% {
    background: ${startingColor};
  }
  to {
    background: ${endingColor};
  }
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 50px);
  width: ${loaderSize};
  height: ${loaderSize};
  display: grid;
  grid-template-columns: repeat(3, ${blockSize});
  grid-template-rows: repeat(3, ${blockSize});
  gap: ${gapSize};
`;

export const LoaderBlock = styled.span`
  position: relative;
  display: inline-block;
  opacity: 0;
  width: ${blockSize};
  height: ${blockSize};
  background: ${startingColor};
  animation: ${showAnimation} ${duration}s step-end infinite alternate,
    ${pulseAnimation} ${duration}s linear infinite alternate;
`;
