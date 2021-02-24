import styled, { css } from "styled-components";
import themes from "../Common/themes";
import pointerCursor from "../Common/assets/images/cursors/cursor-pointer.png";

const DesktopButtonHover = () => css`
    :hover{
        cursor: ${pointerCursor};
    }
    :active {
        background: #0000a8;
    }
`;

const StyledDiv = styled.div`
`;

const DesktopButtonStyled = styled.form`
    color: ${themes.default.materialTextInvert};
    width: 100px;
    height: 110px;
    letter-spacing: 2px;
    font-size: 20px;
    padding-bottom: 20px;
    
    ${DesktopButtonHover()}
`;

const DesktopButton = props => {
    const openText = (object) => {
        // Make window no longer active
        //
        props.openWindow(object);
        (props.setFilename && props.setFilename(object));
        
      }
      const openTab = () => {
        if(props.link.includes("mailto")){
            window.open(props.link, "_self");
          
        }
        else{
            window.open(props.link, "_blank");
        }
      }

    return (
            <StyledDiv className={`${props.className}--div desktop__button--div`}>
                {props.openWindow && <DesktopButtonStyled className={props.formClass} onDoubleClick={() => openText(props.text)}>
                    <img src={props.icon} className={`image ${props.iconClass}`} alt="icon" style={{display: "block", width: 64, marginLeft: "auto", marginRight: "auto", paddingTop: 5}} ></img>
                    <p className={props.textClass} style={{textAlign: "center", position: "relative", top: -20}} >{props.text}</p>
                </DesktopButtonStyled>}
                
                {props.link && <DesktopButtonStyled className={props.formClass} onDoubleClick={openTab}>
                    <img src={props.icon} className={`image ${props.iconClass}`} alt="icon" style={{display: "block", width: 64, marginLeft: "auto", marginRight: "auto", paddingTop: 5}} ></img>
                    <p className={props.textClass} style={{textAlign: "center",  position: "relative", top: -20}} >{props.text}</p>
                </DesktopButtonStyled>}
            </StyledDiv>
    )
}

export default DesktopButton;