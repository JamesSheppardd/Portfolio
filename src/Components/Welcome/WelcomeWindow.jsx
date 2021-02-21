import { buildQueries } from "@testing-library/react";
import React, { useState } from "react";
import Draggable from 'react-draggable';

import styled, { css } from "styled-components";
import { createBorderStyles, createBoxStyles } from "../Common/index";
import themes from "../Common/themes";
// Components
import WelcomeWindowHeader from "./WelcomeWindowHeader";
import WelcomeWindowInner from "./WelcomeWindowInner";
// Cursors


const StyledWindow = styled.div`
    position: absolute;
    left: 11%;
    width: 78%;
    height: 65%;
    font-size: 1rem;
    ${createBorderStyles()}
    ${createBoxStyles()}
`;


const SelectorButton = styled.button`
    position: absolute;
    width: 21%;
    height: 6%;
    right: 5%;
    text-align: center;
    font-size: 19px;
    background-color: ${themes.default.material};
`;

const Title = styled.p`
  padding-top: 3.3%;
  padding-left: 4%;
  font-size: 50px;
  margin-bottom: 0;
`;

const TitleBold = styled.span`
  font-weight: 1000;
`;

const TitleWhite = styled.span`
  color: ${themes.default.canvasTextInvert};
`;

const WelcomeWindow = props => {
  let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

  const [currentFolderName, setCurrentFolderName] = useState(props.currentFolderName);

  const openGithub = () => {
    window.open("https://github.com/JamesSheppardd", "_blank");
  }

  const openContact = () => {
    window.open("mailto:jamesasheppard9@gmail.com", "_self");
  }

    return (
      <div style={{width: "100%", height: "94.3vh"}}>
        {!isPhone && 
          <Draggable bounds="parent" handle="strong" >
            <StyledWindow className={`${props.className}__window window active`} leftPos={props.leftPos} topPos={props.topPos} >
              
              <strong className={`${props.className}__drag drag-area`}>
                <WelcomeWindowHeader className={`${props.className}__header window-header`} currentFolderName={currentFolderName} close={props.close} windowType={props.className} />
              </strong>

              <Title>Welcome to <TitleBold>Sheppard</TitleBold> <TitleWhite>95</TitleWhite></Title>

              <div style={{}}>
                <SelectorButton className="welcome-button welcome-button__whats-new">What's <u>N</u>ew</SelectorButton>
              </div>
              <div style={{paddingTop: "5%"}}>
                <SelectorButton className="welcome-button welcome-button__github" onClick={openGithub}><u>G</u>ithub</SelectorButton>
              </div>
              <div style={{paddingTop: "5%"}}>
                <SelectorButton className="welcome-button welcome-button__contact-me" onClick={openContact}>Contact <u>M</u>e</SelectorButton>
              </div>
              <div style={{paddingTop: "23%"}}>
                <SelectorButton className="welcome-button welcome-button__close" onClick={props.close}>Close</SelectorButton>
              </div>
              
              

              <WelcomeWindowInner className={`${props.className}__inner`} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} textFile={props.currentFolderName} content={props.content} setFilename={props.setFilename} />
            </StyledWindow>
          </Draggable>}
        

        {/* If is a phone, no draggable window */}
        {isPhone && 
          <StyledWindow className={`${props.className}__window window active`} leftPos={props.leftPos} topPos={props.topPos} >
            <strong className={`${props.className}__drag drag-area`}>
              <WelcomeWindowHeader className={`${props.className}__header window-header`} currentFolderName={currentFolderName} close={props.triggerWindow} windowType={props.className} />
            </strong>
            <WelcomeWindowInner className={`${props.className}__inner`} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} textFile={props.currentFolderName} content={props.content} setFilename={props.setFilename} />
          </StyledWindow>}
        
      </div>
    );
};
export default WelcomeWindow;