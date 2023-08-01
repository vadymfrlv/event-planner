import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: local('Poppins-Light'),
        url("src/fonts/Poppins-Light.ttf") format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins-Regular'),
        url("src/assets/fonts/Poppins-Regular.ttf") format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins-Medium'),
        url("src/assets/fonts/Poppins-Medium.ttf") format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins-SemiBold'),
        url("src/assets/fonts/Poppins-SemiBold.ttf") format('truetype');
    font-weight: 600;
    font-style: normal;
}
@font-face {
    font-family: 'Poppins';
    src: local('Poppins-Bold'),
        url("src/assets/fonts/Poppins-Bold.ttf") format('truetype');
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Poppins';
    src: local('Poppins-ExtraBold'),
        url("src/assets/fonts/Poppins-ExtraBold.ttf") format('truetype');
    font-weight: 800;
    font-style: normal;
}
`;
