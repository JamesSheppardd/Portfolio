import styled from "styled-components";
import themes from "../Common/themes";
// Asssets import
import exitButton from "../Common/assets/images/ExitButton.png";

const WindowHeaderStyled = styled.div`
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 10px;
  left: 10px;
  height: 30px;
  background: ${themes.default.headerBackground}; 
`;

const WindowHeaderStyledButton = styled.button`
  position: absolute;
  background-image: url(${props => props.buttonType});
  width: 24px;
  height: 24px;
  top: 3px;
  right: ${props => props.rightOffset}px;
  background-repeat: no-repeat;
  background-size: contain;
`;

const WindowHeaderContent = props => {
  let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

  return (
    <div>
      <span 
        className={`${props.className}--title`}
        style={{color: themes.default.headerText, position: "absolute", left: 2, top: 5, fontSize: 20}}
      >
        {props.currentFolderName}
      </span>
      {/* If it isn't a phone */}
      {!isPhone && <WindowHeaderStyledButton className={`${props.className}--exit window-header-button`} buttonType={exitButton} rightOffset={6} onClick={props.close} />}
      {/* If it IS a phone - changes rightOffset */}
      {isPhone && <WindowHeaderStyledButton className={`${props.className}--exit window-header-button`} buttonType={exitButton} rightOffset={6} onClick={props.close} />}
    </div>
    
  )
}

const WindowHeader = props => {
  

  return (
    <WindowHeaderStyled className={props.className}>
      <WindowHeaderContent className={`${props.className}__content`} currentFolderName={props.currentFolderName} close={props.close} maximise={props.maximise} windowType={props.windowType} />
    </WindowHeaderStyled>
  )
}

export default WindowHeader;