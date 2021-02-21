import styled from "styled-components";
import themes from "../Common/themes";
// Asssets import
import minButton from "../Common/assets/images/MinimiseButton.png";
import maxButton from "../Common/assets/images/MaximiseButton.png";
import exitButton from "../Common/assets/images/ExitButton.png";
import folderOpenImage from "../Common/assets/images/FolderOpen.png";
import textImage from "../Common/assets/images/TextFile.png";

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
  const determineHeaderImage = () => {
    switch(props.windowType){
      case "text-document":
        return textImage;
      default:
        return folderOpenImage;
    }
    
  }

  return (
    <div>
      <img 
        className={`${props.className}--icon`}
        src={determineHeaderImage()} 
        alt="folder"
        width="30"
        style={{position: "absolute", left: 2}}
      />
      
      <span 
        className={`${props.className}--title`}
        style={{color: themes.default.headerText, position: "absolute", left: 35, top: 5, fontSize: 20}}
      >
        {props.currentFolderName}
      </span>
      {/* If it isn't a phone */}
      {!isPhone && <WindowHeaderStyledButton className={`${props.className}--exit window-header-button`} buttonType={exitButton} rightOffset={6} onClick={props.close} />}
      {!isPhone && <WindowHeaderStyledButton className={`${props.className}--maximise window-header-button`} buttonType={maxButton} rightOffset= {34} />}
      {!isPhone && <WindowHeaderStyledButton className={`${props.className}--minimise window-header-button`} buttonType={minButton} rightOffset= {62} />}
      {/* If it IS a phone - changes rightOffset */}
      {isPhone && <WindowHeaderStyledButton className={`${props.className}--exit window-header-button`} buttonType={exitButton} rightOffset={6} onClick={props.close} />}
      {isPhone && <WindowHeaderStyledButton className={`${props.className}--maximise window-header-button`} buttonType={maxButton} rightOffset= {34} />}
      {isPhone && <WindowHeaderStyledButton className={`${props.className}--minimise window-header-button`} buttonType={minButton} rightOffset= {62} />}
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