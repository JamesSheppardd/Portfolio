import styled from "styled-components";
import { createBorderStyles, createBoxStyles } from "../Common/index";
import WelcomeWindow from "./WelcomeWindow";

const StyledWelcome = styled.div`
    top: 10%;
    left: 5%;
    height: 100%;
    width: 100.2%;
    ${createBorderStyles()}
    ${createBoxStyles()}
`

const Welcome = props => {
    return (
        <StyledWelcome>
            <div style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9998}} onClick={props.close}></div>
            <WelcomeWindow
                currentFolderName="Welcome"
                close={props.close}
            ></WelcomeWindow>
        </StyledWelcome>
    )
}

export default Welcome;