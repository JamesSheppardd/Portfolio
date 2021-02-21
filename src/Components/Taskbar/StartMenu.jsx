import styled from "styled-components";
import themes from "../Common/themes";
import { createBorderStyles, createBoxStyles } from "../Common/index"
// Assets 
import * as images from "../Common/assets/images/images";

const StyledStartMenu = styled.div`
    position: fixed;
    left: 0.3%;
    bottom: 4.6%;
    top: 45%;
    
    z-index: 9999;
    ${createBorderStyles()}
    ${createBoxStyles()}
`;

const StyledObjects = styled.div`
    padding-left: 3px;
    width: 98%;
    border-bottom-style: solid;
    border-bottom-width: 0.15vw;
    border-bottom-color: ${themes.default.borderDark};
    box-shadow: 0px 0.15vw 0px
        0px
        ${themes.default.borderLightest};
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

    const openDocument = (object) => {
        // Make window no longer active
        const activeObjects = document.getElementsByClassName("active");
        for(var i = 0; i < activeObjects.length; i++){
            activeObjects[i].classList.remove("active");
        };
        // Open the folder
        //props.openFolder(object, props.setObjects, props.setCurrentFolderName);
        const classNames = object.target.className.split(" ");
        let newFilename = classNames;
        if(classNames.length > 4){
            newFilename = `${classNames[classNames.length - 2]} ${classNames[classNames.length - 1]}`
            props.setFilename(newFilename);
            props.openDocument(object);
        } else{
            newFilename = classNames[classNames.length - 1];
            props.setFilename(newFilename);
            props.openDocument(object);
        }


        
        
    }

    return (
        <div>
        {!props.link && 
            <StyledObjects className={`start-menu-object ${props.name}`} onClick={openDocument}>
                <img className="start-menu-object-icon" src={determineIcon()} alt={props.type} width={30} style={{position: "relative"} }></img>
                <span style={{position: "absolute", paddingLeft:7, paddingTop: 9}}>{props.name}</span>
            </StyledObjects>}

        {props.link && 
            <StyledObjects className="start-menu-object" onClick={openTab}>
                <span><img className="start-menu-object-icon" src={determineIcon()} alt={props.type} width={30} style={{position: "relative"}}></img></span>
                <span style={{position: "absolute", paddingLeft:7, paddingTop: 9}}>{props.name}</span>
            </StyledObjects>}
        
        </div>
        
        
    )
}

const StartMenu = props => {

    return (
        <StyledStartMenu className="start-menu">
            <StartMenuObjects name="GitHub" type="Github" link="https://github.com/JamesSheppardd" openDocument={props.openDocument} setFilename={props.setFilename}></StartMenuObjects>
            <StartMenuObjects name="Favourite Projects" type="File Folder" openDocument={props.openDocument} setFilename={props.setFilename}></StartMenuObjects>
            <StartMenuObjects name="CV" type="Text Document" openDocument={props.openDocument} setFilename={props.setFilename}></StartMenuObjects>
            <StartMenuObjects name="Source Code" type="Github" link="https://github.com/JamesSheppardd/Portfolio" openDocument={props.openDocument} setFilename={props.setFilename}></StartMenuObjects>
            <StartMenuObjects name="Contact Me" type="Mail" link="mailto:jamesasheppard9@gmail.com" openDocument={props.openDocument} setFilename={props.setFilename}></StartMenuObjects>
            
        </StyledStartMenu>
    )
}

export default StartMenu;