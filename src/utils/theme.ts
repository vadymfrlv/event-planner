import { breakpoints } from 'constants/devices';

export const theme = {
  colors: {
    white: '#FFFFFF',
    text: '#3F3F3F',
    accent: '#7B61FF',
    divider: '#ACA7C3',
    hight: '#FF2B77',
    medium: '#E2A300',
    low: '#6BD475',
    background: '#FEFCFF',
  },
  fonts: {
    main: 'Poppins',
    logo: 'Alata',
  },
  fontSizes: [24],
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
  letterSpacings: {
    small: '2px',
    normal: '3px',
    wide: '10px',
  },
  lineHeights: {
    body: 1.3,
  },
  borders: {
    none: 'none',
    header: '1px solid #7B61FF',
    listDivider: '1px solid #ACA7C3',
    listDividerHover: '1px solid #7B61FF',
  },
  radii: {
    none: '0',
    eight: '8px',
    poster: '5px',
  },
  shadows: {
    elements: '0px 1px 8px 0px rgba(185, 156, 195, 0.28)',
    navLink:
      '0 0 3px #91ff00, 0 0 8px #91ff00, 0 0 13px #91ff00, 0 0 17px #91ff00, 0 0 22px #91ff00, 0 0 27px #91ff00, 0 0 32px #91ff00',
    btn: '0 0 5px #91ff00, 0 0 5px #91ff00, 0 0 9px #91ff00, 0 0 13px #91ff00, 0 0 18px #91ff00, 0 0 23px #91ff00, 0 0 28px #91ff00',
  },
  zIndices: [-1, 0, 1, 2, 3, 4, 5],
  screens: {
    mob: breakpoints.MOB,
    tab: breakpoints.TAB,
    desk: breakpoints.DESK,
  },
};
