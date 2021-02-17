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
        props.openWindow(object);
        (props.setFilename && props.setFilename(object));
        
      }

    return (
        <div style={{paddingTop: 10, paddingBottom: 130, paddingLeft: 30 }}>
            <DesktopButtonStyled className={props.formClass} onDoubleClick={() => openText(props.text)}>
                <img src={props.icon} className={`image ${props.iconClass}`} alt="icon" style={{display: "block", width: 64, marginLeft: "auto", marginRight: "auto"}} ></img>
                <p className={props.textClass} style={{textAlign: "center"}} >{props.text}</p>
            </DesktopButtonStyled>
        </div>
    )
}

export default DesktopButton;