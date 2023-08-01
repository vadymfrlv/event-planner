import { ReactNode, CSSProperties } from 'react';
import styled from 'styled-components';

import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

interface BoxProps extends CSSProperties {
  children?: ReactNode;
}

export const Box: React.FC<BoxProps> = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);
