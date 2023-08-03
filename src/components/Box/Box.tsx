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
    margin: 0 auto;
    padding: 0 24px;

    @media screen and (min-width: ${breakpoints.MOB}) {
      max-width: calc(${breakpoints.MOB} - 48px);
    }

    @media screen and (min-width: ${breakpoints.TAB}) {
      max-width: calc(${breakpoints.TAB} - 80px);
      padding: 0 40px;
    }

    @media screen and (min-width: ${breakpoints.DESK}) {
      max-width: calc(${breakpoints.DESK} - 160px);
      padding: 0 80px;
    }
  `
);
