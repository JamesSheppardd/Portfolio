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

const DesktopButtonStyled = styled.form`
    position: absolute;
    padding-bottom: 10px;
    color: ${themes.default.materialTextInvert};
    letter-spacing: 2px;
    font-size: 20px;
    width: 105px;
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
          if(props.link !== "mailto:jamesasheppard9@gmail.com"){
            window.open(props.link, "_blank");
          }
          else{
            window.open(props.link, "_self");
          }
      }

    return (
        <div style={{paddingTop: 10, paddingBottom: 125, paddingLeft: 30 }}>
            {props.openWindow && <DesktopButtonStyled className={props.formClass} onDoubleClick={() => openText(props.text)}>
                <img src={props.icon} className={`image ${props.iconClass}`} alt="icon" style={{display: "block", width: 64, marginLeft: "auto", marginRight: "auto"}} ></img>
                <p className={props.textClass} style={{textAlign: "center"}} >{props.text}</p>
            </DesktopButtonStyled>}
            
            {props.link && <DesktopButtonStyled className={props.formClass} onDoubleClick={openTab}>
                <img src={props.icon} className={`image ${props.iconClass}`} alt="icon" style={{display: "block", width: 64, marginLeft: "auto", marginRight: "auto"}} ></img>
                <p className={props.textClass} style={{textAlign: "center"}} >{props.text}</p>
            </DesktopButtonStyled>}
        </div>
    )
}

export default DesktopButton;