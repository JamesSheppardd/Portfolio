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
    font-size: 1rem;
    left: ${props => props.leftPos}%;
    top: ${props => props.topPos}%;
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
  let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 812px)").matches;

  const [objects, setObjects] = useState(props.objects);
  const [currentFolderName, setCurrentFolderName] = useState(props.currentFolderName);

  

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
  }

    return (
      <div style={{width: "100%", height: "93.7vh"}}>
        {!isPhone && 
          <Draggable bounds="parent" handle="strong" >
            <StyledWindow className={`${props.className}__window window active`} leftPos={props.leftPos} topPos={props.topPos} onMouseDownCapture={changeToActive} >
              <WindowOptions className={`${props.className}__options`} />
              <strong className={`${props.className}__drag drag-area`}>
                <WindowHeader className={`${props.className}__header window-header`} currentFolderName={currentFolderName} close={props.triggerWindow} windowType={props.className} />
              </strong>
              <WindowInner className={`${props.className}__inner`} objects={objects} openFolder={openFolder} setObjects={setObjects} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} openText={openText} textFile={props.currentFolderName} content={props.content} setFilename={props.setFilename} />
              
              {/* If it is a file explorer window */}
              {props.isFileExplorer && 
                <StatusBar className={`${props.className}__status-bar`} objectsLength={objects.length} objectsSize={objects.map(object => object.size)} />
              }
              <ResizeHandle className={`${props.className}__resize`} data-testid="resizeHandle" />
            </StyledWindow>
          </Draggable>}
        
        {/* If is a phone, no draggable window */}
        {isPhone && 
          <StyledWindow className={`${props.className}__window window active`} leftPos={0} topPos={0} onMouseDownCapture={changeToActive} >
            <WindowOptions className={`${props.className}__options`} />
            <strong className={`${props.className}__drag drag-area`}>
              <WindowHeader className={`${props.className}__header window-header`} currentFolderName={currentFolderName} close={props.triggerWindow} windowType={props.className} />
            </strong>
            <WindowInner className={`${props.className}__inner`} objects={objects} openFolder={openFolder} setObjects={setObjects} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} openText={openText} textFile={props.currentFolderName} content={props.content} setFilename={props.setFilename} />
            
            {/* If it is a file explorer window */}
            {props.isFileExplorer && 
              <StatusBar className={`${props.className}__status-bar`} objectsLength={objects.length} objectsSize={objects.map(object => object.size)} />
            }
            <ResizeHandle className={`${props.className}__resize`} data-testid="resizeHandle" />
          </StyledWindow>}
        
      </div>
    );
};
export default Window;