import React, { useState } from "react";
import Draggable from 'react-draggable';

import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../Common/index";
import themes from "../Common/themes";
// Components
import WelcomeWindowHeader from "./WelcomeWindowHeader";
import WelcomeWindowInner from "./WelcomeWindowInner";

import determineTextDocument from "../Desktop/determine-text-document";

const StyledWindow = styled.div`
    position: absolute;
    
    font-size: 1rem;
    z-index: 9999;
    ${createBorderStyles()}
    ${createBoxStyles()}
`;


const SelectorButton = styled.button`
    position: absolute;
    
    text-align: center;
    
    background-color: ${themes.default.material};
`;

const Title = styled.p`
  padding-top: 3.3%;
  padding-left: 4%;
  
  margin-bottom: 0;
`;

const TitleBold = styled.span`
  font-weight: 1000;
`;

const TitleWhite = styled.span`
  color: ${themes.default.canvasTextInvert};
`;

const WelcomeWindow = props => {
  let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 812px)").matches;

  const startWelcomeText = 'Welcome to my website! Feel free to open any of the folders or documents on the desktop, doing so by double clicking (or double tapping, if on a touchscreen device), or click on the "Start" button in the taskbar in the bottom left for more readily available documents.'

  const [currentFolderName, setCurrentFolderName] = useState(props.currentFolderName);
  const [welcomeText, setWelcomeText] = useState(startWelcomeText);
  const [header, setHeader] = useState("Hi There!");

  const openGithub = () => {
    window.open("https://github.com/JamesSheppardd", "_blank");
  }

  const openContact = () => {
    window.open("mailto:James@jamessheppard.net", "_self");
  }

  const openChanges = () => {
    setWelcomeText(() => determineTextDocument("Changelog").props.children[2])
    setHeader(() => "What's New")
  }

    return (
      <div style={{width: "100%", height: "93.7vh"}}>
        {!isPhone && 
          <Draggable bounds="parent" handle="strong" >
            <StyledWindow className={`${props.className}__window welcome-window active`} leftPos={props.leftPos} topPos={props.topPos} >
              
              <strong className={`${props.className}__drag drag-area`}>
                <WelcomeWindowHeader className={`${props.className}__header welcome-window-header`} currentFolderName={currentFolderName} close={props.close} windowType={props.className} />
              </strong>

              <Title className="welcome-window-title" >Welcome to <TitleBold>Sheppard</TitleBold> <TitleWhite>95</TitleWhite></Title>

              <div>
                <SelectorButton className="welcome-button welcome-button__whats-new" onClick={openChanges}>What's <u>N</u>ew</SelectorButton>
              </div>
              <div style={{paddingTop: 50}}>
                <SelectorButton className="welcome-button welcome-button__github" onClick={openGithub}><u>G</u>ithub</SelectorButton>
              </div>
              <div style={{paddingTop: 50}}>
                <SelectorButton className="welcome-button welcome-button__contact-me" onClick={openContact}>Contact <u>M</u>e</SelectorButton>
              </div>
              <div style={{position: "absolute", bottom: "10%", right:6}}>
                <SelectorButton className="welcome-button welcome-button__close" onClick={props.close}>Close</SelectorButton>
              </div>
              
              

              <WelcomeWindowInner className={`${props.className}__inner welcome-window-inner`} header={header} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} textFile={props.currentFolderName} content={welcomeText} setFilename={props.setFilename} />
            </StyledWindow>
          </Draggable>}
        

        {/* If is a phone, no draggable window */}
        {isPhone && 
          <StyledWindow className={`${props.className}__window welcome-window active`} leftPos={props.leftPos} topPos={props.topPos} >
              
              <strong className={`${props.className}__drag drag-area`}>
                <WelcomeWindowHeader className={`${props.className}__header welcome-window-header`} currentFolderName={currentFolderName} close={props.close} windowType={props.className} />
              </strong>

              <Title className="welcome-window-title" >Welcome to <TitleBold>Sheppard</TitleBold> <TitleWhite>95</TitleWhite></Title>

              <div>
                <SelectorButton className="welcome-button welcome-button__whats-new" style={{position: "absolute", left: "3%"}} onClick={openChanges}>What's <u>N</u>ew</SelectorButton>
              </div>
              <div style={{paddingTop: 50}}>
                <SelectorButton className="welcome-button welcome-button__github" onClick={openGithub} ><u>G</u>ithub</SelectorButton>
              </div>
              <div style={{paddingTop: 50}}>
                <SelectorButton className="welcome-button welcome-button__contact-me" onClick={openContact} style={{position: "absolute", right: "3%"}}>Contact <u>M</u>e</SelectorButton>
              </div>
              <div >
                <SelectorButton className="welcome-button__close" onClick={props.close}>Close</SelectorButton>
              </div>
              
              

              <WelcomeWindowInner className={`${props.className}__inner welcome-window-inner`} header={header} setCurrentFolderName={setCurrentFolderName} isFileExplorer={props.isFileExplorer} textFile={props.currentFolderName} content={welcomeText} setFilename={props.setFilename} />
            </StyledWindow>}
        
      </div>
    );
};
export default WelcomeWindow;