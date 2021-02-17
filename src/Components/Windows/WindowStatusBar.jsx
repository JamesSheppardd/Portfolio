import styled from "styled-components";
import themes from "../Common/themes";
import { createBorderStylesStatus, createBoxStyles } from "../Common/index";
import { relativeTimeRounding } from "moment";

const StatusBarObjectsStyled = styled.div`
    position: absolute;
    top: 750px;
    left: ${props => props.leftOffset}px;
    bottom: 790px;
    width: ${props => props.width}px;
    height: 40px;
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
    return (
        <div className={`${props.className}`}>
            <StatusBarObjectsStyled className={`${props.className}--object-num`} leftOffset={10} width={300}>
                <StatusBarObjectsContent objectsLength={props.objectsLength} />
            </StatusBarObjectsStyled>

            <StatusBarObjectsStyled className={`${props.className}--folder-size`} leftOffset={320} width={470}>
                <StatusBarSizeContent objectsSize={props.objectsSize} />
            </StatusBarObjectsStyled>
        </div>
    )
}

export default StatusBar;