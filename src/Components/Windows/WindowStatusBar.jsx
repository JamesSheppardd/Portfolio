import styled from "styled-components";
import { createBorderStylesStatus, createBoxStyles } from "../Common/index";

const StatusBarObjectsStyled = styled.div`
    position: absolute;
    
    left: ${props => props.leftOffset}%;
    width: ${props => props.width}%;
    
    font-size: 22px;
    ${createBorderStylesStatus()}
    ${createBoxStyles()}
`;

const StatusBarObjectsContent = props => {
    return (
        <div>
            <span style={{position: "relative", top: 6}}>{props.objectsLength} object(s)</span>
        </div>
    )
}

const StatusBarSizeContent = props => {
    

    const determineSizeShort = (size) => {
        if(props.size <= 0){
            return "";
        } else if(size > 0 && size < 1000){
            return size;
        } else if(size >= 1000 && size < 1000000) {
            return size / 1000;
        } else if(size >= 1000000 && size < 1000000000) {
            return size / 1000000;
        } else if(size >= 1000000000 && size < 1000000000000) {
            return size / 1000000000;
        } else {
            return size / 1000000000000;
        }
    }

    const determineSizeAcronym = (size) => {
        if(size <= 0){
            return "B";
        } else if(size > 0 && size < 1000){
            return "B";
        } else if(size >= 1000 && size < 1000000) {
            return "KB";
        } else if(size >= 1000000 && size < 1000000000) {
            return "MB";
        } else if(size >= 1000000000 && size < 1000000000000) {
            return "GB";
        } else {
            return "TB";
        }
    }

    const determineSize = () => {
        const size = props.objectsSize.reduce((r,c) => r + c, 0);
        const finSize = determineSizeShort(size).toFixed(1);
        const acronym = determineSizeAcronym(size);
        return `${finSize}${acronym}`;
    }

    return (
        <div>
            <span style={{position: "relative", top: 6}}>
                {determineSize()}
            </span>
        </div>
    )
}

const StatusBar = props =>{
    let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;
    return (
        <div>
        {/* If it isn't a phone */}
            {!isPhone && <div className={`${props.className}`}>
                <StatusBarObjectsStyled className={`${props.className}--object-num status-bar-box`} leftOffset={1.4} width={45.4}>
                    <StatusBarObjectsContent objectsLength={props.objectsLength} />
                </StatusBarObjectsStyled>

                <StatusBarObjectsStyled className={`${props.className}--folder-size status-bar-box`} leftOffset={48} width={50.8}>
                    <StatusBarSizeContent objectsSize={props.objectsSize} />
                </StatusBarObjectsStyled>
        </div>}

        {/* If it is a phone */}
        {isPhone && <div className={`${props.className}`}>
        <StatusBarObjectsStyled className={`${props.className}--object-num status-bar-box`} leftOffset={3} width={43.4}>
            <StatusBarObjectsContent objectsLength={props.objectsLength} />
        </StatusBarObjectsStyled>

        <StatusBarObjectsStyled className={`${props.className}--folder-size status-bar-box`} leftOffset={48} width={49.2}>
            <StatusBarSizeContent objectsSize={props.objectsSize} />
        </StatusBarObjectsStyled>
</div>}
        </div>
    )
}

export default StatusBar;