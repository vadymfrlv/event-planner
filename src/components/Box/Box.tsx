import { ReactNode, CSSProperties, ElementType } from 'react';
import styled, { css } from 'styled-components';

import { breakpoints } from 'constants/devices';

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
  as?: ElementType;
}

export const BaseBox: React.FC<BoxProps> = styled('div')(
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

export const ResponsiveBox = styled(BaseBox)(
  () => css`
    width: 100%;

    margin: 0 auto;
    padding: 0 24px;

    @media screen and (min-width: ${breakpoints.MOB}) {
      max-width: ${breakpoints.MOB};
    }

    @media screen and (min-width: ${breakpoints.TAB}) {
      max-width: ${breakpoints.TAB};
    }

    @media screen and (min-width: ${breakpoints.DESK}) {
      max-width: 100%;
    }
  `
);
