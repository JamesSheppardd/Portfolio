import styled from "styled-components";
import themes from "../Common/themes";
import windowsLogo from "../Common/assets/images/icons/Windows logo (without text).png";

const SelectorButton = styled.button`
    position: absolute;
    padding: 2px 10px;
    left: 0.3%;
    top: 12%;
    bottom: 7%;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    font-size: 26px;
    font-weight: 1000;
    background-color: ${themes.default.material};
    text-indent: -50%;
`;


const StartButton = (props) => (
    <div>
        <SelectorButton className={props.className} onClick={props.openStart}>
            <span style={{position: "relative", left: "20%"}}><img src={windowsLogo} alt="" width="32"></img></span>
            <span style={{position: "relative", left: "30%"}}>Start</span>
        </SelectorButton>
    </div>
)

export default StartButton;