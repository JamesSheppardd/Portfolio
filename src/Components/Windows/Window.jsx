import { buildQueries } from "@testing-library/react";
import React, { useState } from "react";
import Draggable from 'react-draggable';

import styled, { css } from "styled-components";
import { createBorderStyles, createBoxStyles } from "../Common/index";
import themes from "../Common/themes";
import openFolder from "./openFolder";
// Components
import WindowHeader from "./WindowHeader";
import WindowInner from "./WindowInner";
import WindowOptions from "./WindowOptions";
import StatusBar from "./WindowStatusBar";
// Cursors
import moveCursor from "../Common/assets/images/cursors/cursor-move.png";



export const newObject = (name, size, type, modified) => {
  return {
    "name": name,
    "size": size,
    "type": type,
    "modified": modified
  }
} 




const StyledWindow = styled.div`
    position: absolute;
    left: ${props => props.leftPos}%;
    top: ${props => props.topPos}%;
    padding: ${props => props.padding}px;
    font-size: 1rem;
    ${createBorderStyles()}
    ${createBoxStyles()}
`;

const ResizeHandle = styled.span`
  ${() => css`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${themes.default.borderLightest} 16.67%,
      ${themes.default.material} 16.67%,
      ${themes.default.material} 33.33%,
      ${themes.default.borderDark} 33.33%,
      ${themes.default.borderDark} 50%,
      ${themes.default.borderLightest} 50%,
      ${themes.default.borderLightest} 66.67%,
      ${themes.default.material} 66.67%,
      ${themes.default.material} 83.33%,
      ${themes.default.borderDark} 83.33%,
      ${themes.default.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`;

const Window = props => {
  const [objects, setObjects] = useState(props.objects);
  const [currentFolderName, setCurrentFolderName] = useState(props.currentFolderName);
  const [windowMaximise, setWindowMaximise] = useState(false);

  const triggerWindowMaximiseState = () => {
    setWindowMaximise(prevWindowMaximise => !prevWindowMaximise);
  }

  

  const openText = (object) => {
    if(object.type === "Text Document"){
      props.openText(object.name);
    }
  }

  const changeToActive = (o) => {
    const activeObjects = document.getElementsByClassName("active");
    const newActive = document.getElementsByClassName(`${props.className}__window`)[0];
    for(var i = 0; i < activeObjects.length; i++){
      if(activeObjects[i] !== newActive){
        activeObjects[i].classList.remove("active");
      }
    };
    newActive.classList.add("active");
    console.log(o)
  }

    return (
      <Draggable bounds="parent" handle="strong" >
        <StyledWindow className={`${props.className}__window`} leftPos={props.leftPos} topPos={props.topPos} padding={400} onMouseDownCapture={changeToActive} >
          <WindowHeader className={`${props.className}__header window-header`} currentFolderName={currentFolderName} close={props.triggerWindow} maximise={triggerWindowMaximiseState} windowType={props.className} />
          <strong className={`${props.className}__drag drag-area`}>
            <div style={{position: "absolute", left: 10, right: 100, top: 6, height: 30}}></div>
          </strong>
          
          
          <WindowOptions className={`${props.className}__options`} />
          <WindowInner className={`${props.className}__inner`} objects={objects} openFolder={openFolder} setObjects={setObjects} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} openText={openText} textFile={props.currentFolderName} content={props.content} setFilename={props.setFilename} />
          
          <ResizeHandle className={`${props.className}__resize`} data-testid="resizeHandle" />

          {/* If it is a file explorer window */}
          {props.isFileExplorer && 
            <StatusBar className={`${props.className}__status-bar`} objectsLength={objects.length} objectsSize={objects.map(object => object.size)} />
          }
        </StyledWindow>
      </Draggable>
        
    );
};
export default Window;