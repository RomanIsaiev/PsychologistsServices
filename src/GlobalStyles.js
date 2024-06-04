import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './vars.js';

import InterRegular from '../src/fonts/Inter-Regular.ttf';
import InterMedium from '../src/fonts/Inter-Medium.ttf';
import InterBold from '../src/fonts/Inter-Bold.ttf';

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url(${InterRegular}) format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'Inter';
    src: url(${InterMedium}) format('truetype');
    font-weight: 500;
}

@font-face {
    font-family: 'Inter';
    src: url(${InterBold}) format('truetype');
    font-weight: 700;
}

body{
    margin: 0;
    font-family: 'Inter', sans-serif;
    color: ${theme.color.black};
}

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    ul,
    ol {
        margin: 0;
        padding: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        cursor: pointer;
    }
    
    .container {
        max-width: ${theme.breakpoint.xl};
        width: 100%;
        padding: 0 128px;
        margin: 0 auto;
    }
    
    .psychologists{
    padding-top: 64px;
    padding-bottom: 64px;
    background: #F3F3F3;
    min-height: 100vh;
    height: 100%;
    }
    
    .favorites{
    padding-top: 64px;
    padding-bottom: 64px;
    background: #F3F3F3;
    min-height: 100vh;
    height: 100%;
    }`;
