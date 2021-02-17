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
    font-size: 1rem;
    ${createBorderStylesInner()}
    ${createInnerBoxStyles()}
`;

const SelectorButton = styled.button`
    position: absolute;
    width: ${props => props.buttonWidth}px;
    height: 30px;
    left: ${props => props.offset}px;
    top: 79px;
    text-align: start;
    font-size: 19px;
    text-indent: ${props => props.textIndent}px;
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
    font-size: 20px;
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
            <img src={determineIcon()} alt={props.type} style={{width: 20}}></img>
            <span style={{paddingLeft:7}}>{props.name}</span>
            <span style={{position: "absolute", right:405}}>{determineSize()}{determineSizeAcronym()}</span>
            <span style={{position: "absolute", left:390}}>{props.type}</span>
            <span style={{position: "absolute", left:595}}>{props.modified}</span>
        </WindowInnerObjectStyled>
        
    )
}

const WindowInnerObjectContainer = styled.div`
    padding-bottom: 30px;
`;

const WindowInner = props => {

    const passData = (object, name) => {
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
            {props.isFileExplorer && <StyledWindow className={`${props.className}--window`} />}
            {props.isFileExplorer && <div className={`${props.className}--button`}>
                <SelectorButton offset={14} buttonWidth={238} textIndent={10} className={`${props.className}--button__name`} >Name</SelectorButton>
                <SelectorButton offset={252} buttonWidth={140} textIndent={100} className={`${props.className}--button__size`}>Size</SelectorButton>
                <SelectorButton offset={392} buttonWidth={200} textIndent={10} className={`${props.className}--button__type`}>Type</SelectorButton>
                <SelectorButton offset={592} buttonWidth={194} textIndent={10} className={`${props.className}--button__modified`}>Modified</SelectorButton>
            </div>}

            {props.isFileExplorer && <div className={`${props.className}--container`} style={{position: "absolute", top: 114, left: 14, right: 14}}>
                {props.objects.map(object => (
                    <WindowInnerObjectContainer className={`${props.className}--object__${object.name}`} onDoubleClick={() => passData(object, object.name)} >
                        <WindowInnerObject name={object.name} size={object.size} type={object.type} modified={object.modified} offset={115} />
                    </WindowInnerObjectContainer>
                ))}
            </div>
            }

            {/* Text Document window */}
            {!props.isFileExplorer && <StyledWindow className={`${props.className}--window`} />}
            {!props.isFileExplorer && <div className={`${props.className}--content`} style={{position: "absolute", top: 85, left: 14, right: 14, bottom: 60, overflowY: "scroll"}}>
                {selectTextDocument()}
            </div>
            }
        </div>
    )
}

export default WindowInner;