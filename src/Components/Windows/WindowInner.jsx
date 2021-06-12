import styled, { css } from "styled-components";
import themes from "../Common/themes";
import { createBorderStylesInner, createInnerBoxStyles } from "../Common/index";
// Assets
import folderImage from "../Common/assets/images/Folder.png";
import textImage from "../Common/assets/images/TextFile.png";



const StyledWindow = styled.div`
    position: absolute;
    left: 10px;
    top: 75px;
    right: 10px;
    bottom: 60px;
    ${createBorderStylesInner()}
    ${createInnerBoxStyles()}
`;

const SelectorButton = styled.button`
    position: absolute;
    width: ${props => props.buttonWidth}%;
    height: 30px;
    left: ${props => props.offset}%;    
    top: 79px;
    text-align: start;
    font-size: 19px;
    text-indent: ${props => props.textIndent}%;
    background-color: ${themes.default.material};
`;

const WindowInnerObjectStyledActive = () => css`
    :active {
        background: ${themes.default.headerBackground};
        color: ${themes.default.materialTextInvert};
    }
`

const WindowInnerObjectStyled = styled.div`
    position: absolute;
    display: flex;
    left: 16px;
    right: 16px;
    font-size: 19.7px;
    ${WindowInnerObjectStyledActive()}
`

const WindowInnerObject = props => {
    const determineIcon = () => {
        switch(props.type){
            case "File Folder":
                return folderImage;
            case "Text Document":
                return textImage;
            default:
                return folderImage;
        }
    }

    const determineSize = () => {
        if(props.size <= 0){
            return "";
        } else if(props.size > 0 && props.size < 1000){
            return props.size;
        } else if(props.size >= 1000 && props.size < 1000000) {
            return props.size / 1000;
        } else if(props.size >= 1000000 && props.size < 1000000000) {
            return props.size / 1000000;
        } else if(props.size >= 1000000000 && props.size < 1000000000000) {
            return props.size / 1000000000;
        } else {
            return props.size / 1000000000000;
        }
    }

    const determineSizeAcronym = () => {
        if(props.size <= 0){
            return "";
        } else if(props.size > 0 && props.size < 1000){
            return "B";
        } else if(props.size >= 1000 && props.size < 1000000) {
            return "KB";
        } else if(props.size >= 1000000 && props.size < 1000000000) {
            return "MB";
        } else if(props.size >= 1000000000 && props.size < 1000000000000) {
            return "GB";
        } else {
            return "TB";
        }
    }

    return (
        <WindowInnerObjectStyled offset={props.offset}>
            <img src={determineIcon()} alt={props.type} width= {20}></img>
            <span style={{paddingLeft:7}}>{props.name}</span>
            {!props.isPhone && <span style={{position: "absolute", right: "48%"}}>{determineSize()}{determineSizeAcronym()}</span>}
            {!props.isPhone && <span style={{position: "absolute", left:"56%"}}>{props.type}</span>}
            {!props.isPhone && <span style={{position: "absolute", left:"78%"}}>{props.modified}</span>}
        </WindowInnerObjectStyled>
        
    )
}

const WindowInnerObjectContainer = styled.div`
    padding-bottom: 30px;
`;

const WindowInner = props => {
    let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;

    const passData = (object, name) => {
        // Make window no longer active
        const activeObjects = document.getElementsByClassName("active");
        for(var i = 0; i < activeObjects.length; i++){
            activeObjects[i].classList.remove("active");
        };
        // Open the folder
        props.openFolder(object, props.setObjects, props.setCurrentFolderName);
        console.log(name);
        props.openText(object);
        props.setFilename(name);
    }


    const selectTextDocument = () => {
        return props.content;
    }

    return (
        <div className={props.className} style={{height: 0}}>
            {/* File explorer window */}
            {props.isFileExplorer && <StyledWindow className={`${props.className}--window window--inner`} />}
            {props.isFileExplorer && <div className={`${props.className}--button`}>
                {!isPhone && <SelectorButton offset={1.8} buttonWidth={38} textIndent={0} className={`${props.className}--button__name`} >Name</SelectorButton>}
                {!isPhone && <SelectorButton offset={39.8} buttonWidth={14.1} textIndent={65} className={`${props.className}--button__size`}>Size</SelectorButton>}
                {!isPhone && <SelectorButton offset={53.9} buttonWidth={20} textIndent={0} className={`${props.className}--button__type`}>Type</SelectorButton>}
                {!isPhone && <SelectorButton offset={73.9} buttonWidth={24.6} textIndent={0} className={`${props.className}--button__modified`}>Modified</SelectorButton>}
                
                {isPhone && <SelectorButton offset={4.3} buttonWidth={91.95} textIndent={0} className={`${props.className}--button__name`} >Name</SelectorButton>}
            </div>}

            {props.isFileExplorer && <div className={`${props.className}--container`} style={{position: "absolute", top: 114, left: 14, right: 14}}>
                {props.objects.map(object => (
                    <WindowInnerObjectContainer className={`${props.className}--object__${object.name}`} onDoubleClick={() => passData(object, object.name)} >
                        <WindowInnerObject name={object.name} size={object.size} type={object.type} modified={object.modified} offset={115} isPhone={isPhone} />
                    </WindowInnerObjectContainer>
                ))}
            </div>
            }

            {/* Text Document window */}
            {!props.isFileExplorer && <StyledWindow className={`${props.className}--window`} />}
            {!props.isFileExplorer && <div className={`${props.className}--content`} style={{position: "absolute", top: "13%", left: 14, right: 12, bottom: 62, overflowX: "hidden", padding: 0, }}>
                {selectTextDocument()}
                {props.isApp &&
                    <iframe src="https://solar-system-nu.vercel.app/" title="Solar System" width="100%" height="100%" style={{}}>
                        <p>No support for iframes</p>
                    </iframe>
                }
            </div>
            }

            
        </div>
    )
}

export default WindowInner;