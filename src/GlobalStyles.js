import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './vars.js';

import InterRegular from '../src/fonts/Inter-Regular.ttf';
import InterMedium from '../src/fonts/Inter-Medium.ttf';
import InterBold from '../src/fonts/Inter-Bold.ttf';
import { adaptive } from 'utils/adaptive.js';

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
    }

    button {
        cursor: pointer;
    }
    
    .container {
        width: 100%;
        padding: 0 calc(15px + (128 - 15) * ((100vw - 375px) / (1440 - 375)));
        margin: 0 auto;
    }
    
    .psychologists{
    padding-top: 128px;
    padding-bottom: 64px;
    background: #F3F3F3;
    min-height: 100vh;
    height: 100%;
    }
    
    .favorites{
    padding-top: 128px;
    padding-bottom: 64px;
    background: #F3F3F3;
    min-height: 100vh;
    height: 100%;
    }
    
    /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  right: 36px;
  top: 36px;

  ${adaptive('top', 26, 13, 0)}
  ${adaptive('right', 26, 13, 0)}
  ${adaptive('width', 43, 35, 0)}
  ${adaptive('height', 25, 20, 0)}
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: #373a47;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #a90000;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
    top: -25px !important;
    right: 20px !important;
  height: 36px !important;
  width: 36px !important;
}

/* Color/shape of close button cross */
.bm-cross {
  /* background: #101010; */
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
    
   ${adaptive('margin-top', -50, -30, 0)}
  background: #fff;
  padding: 70px 20px;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  color: #b8b7ad;
}

/* Individual item */
.bm-item {
  display: inline-block;
}

/* Styling of overlay */
.bm-overlay {
  /* background: rgba(0, 0, 0, 0.3); */
  width: unset !important;
}`;
