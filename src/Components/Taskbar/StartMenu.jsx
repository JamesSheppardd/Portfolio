import styled, { css } from "styled-components";
import themes from "../Common/themes";
import { createBorderStyles, createBoxStyles } from "../Common/index"
// Assets 
import * as images from "../Common/assets/images/images";

const StyledStartMenu = styled.div`
    position: fixed;
    left: 0.3%;
    bottom: 4.6%;
    top: 45%;
    right: 83%;
    ${createBorderStyles()}
    ${createBoxStyles()}
`;

const StyledObjects = styled.div`
    padding-top: 9px;
    padding-bottom: 15px;
    padding-left: 3px;
    width: 98%;
    border-bottom-style: solid;
    border-bottom-width: 0.15vw;
    border-bottom-color: ${themes.default.borderDark};
    box-shadow: 0px 0.15vw 0px
        0px
        ${themes.default.borderLightest};
    font-size: 22px;
`;

const StartMenuObjects = props => {
    const determineIcon = () => {
        switch(props.type){
            case "File Folder":
                return images.folderIcon;
            case "Text Document":
                return images.textFileIcon;
            case "Github":
                return images.gitHubLogo;
            case "Mail":
                return images.mailIcon;
            
            default:
                return images.folderIcon;
        }
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
        <div>
        {!props.link && 
            <StyledObjects className="start-menu-object">
                <img src={determineIcon()} alt={props.type} width={30} style={{position: "relative"}}></img>
                <span style={{paddingLeft:7}}>{props.name}</span>
            </StyledObjects>}

        {props.link && 
            <StyledObjects className="start-menu-object" onClick={openTab}>
                <img src={determineIcon()} alt={props.type} width={30} style={{position: "relative"}}></img>
                <span style={{paddingLeft:7}}>{props.name}</span>
            </StyledObjects>}
        
        </div>
        
        
    )
}

const StartMenu = () => {

    return (
        <StyledStartMenu>
            <StartMenuObjects name="GitHub" type="Github" link="https://github.com/JamesSheppardd"></StartMenuObjects>
            <StartMenuObjects name="Favourite Projects" type="File Folder"></StartMenuObjects>
            <StartMenuObjects name="CV" type="Text Document"></StartMenuObjects>
            <StartMenuObjects name="Source Code" type="Github" link="https://github.com/JamesSheppardd/Portfolio"></StartMenuObjects>
            <StartMenuObjects name="Contact Me" type="Mail" link="mailto:jamesasheppard9@gmail.com"></StartMenuObjects>
            
        </StyledStartMenu>
    )
}

export default StartMenu;