import { css } from "styled-components";
import themes from "./themes";

export const createBoxStyles = () => css`
  box-sizing: border-box;
  display: inline-block;
  background: ${themes.default.material};
  color: ${themes.default.materialText};
`;

export const createInnerBoxStyles = () => css`
  box-sizing: border-box;
  display: inline-block;
  background: ${themes.default.materialLight};
  color: ${themes.default.materialText};
`;

export const createBorderStyles = () => 
    css `
        border-style: solid;
        border-width: 2px;
        border-left-color: ${themes.default.borderLight};
        border-top-color: ${themes.default.borderLightest};
        border-right-color: ${themes.default.borderDark};
        border-bottom-color: ${themes.default.borderDarkest};
        box-shadow: inset 1px 1px 0px
            1px
            ${themes.default.borderLightest},
          inset -1px -1px 0 1px ${themes.default.borderDark};
    `;

export const createBorderStylesStatus = () => 
    css `
        border-style: solid;
        border-width: 2px;
        border-left-color: ${themes.default.borderDark};
        border-top-color: ${themes.default.borderDark};
        border-right-color: ${themes.default.borderLightest};
        border-bottom-color: ${themes.default.borderLightest};
    `;


  
export const createBorderStylesInner = () => 
    css `
        border-style: solid;
        border-width: 2px;
        border-left-color: ${themes.default.borderDark};
        border-top-color: ${themes.default.borderDark};
        border-right-color: ${themes.default.borderLightest};
        border-bottom-color: ${themes.default.borderLightest};
        box-shadow: inset 1px 1px 0px
            1px
            ${themes.default.borderDarkest},
          inset -1px -1px 0 1px ${themes.default.borderLight};
    `;

// Taskbar 
export const createBorderStylesTaskbar = () => 
  css`
    border-top-style: solid;
    border-top-width: 0.2vw;
    border-top-color: ${themes.default.borderLight};
    box-shadow: inset 0px 0.22vw 0px
        0px
        ${themes.default.borderLightest};

  `;
export const createBorderStylesTaskbarInset = () => 
  css`
    border-style: solid;
    border-width: 0.15vw;
    border-left-color: ${themes.default.borderDark};
    border-top-color: ${themes.default.borderDark};
    border-right-color: ${themes.default.borderLightest};
    border-bottom-color: ${themes.default.borderLightest};
  `;