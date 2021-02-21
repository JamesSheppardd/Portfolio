import styled, { css } from "styled-components";
import { createBorderStyles, createBoxStyles } from "../Common/index";
import WelcomeWindow from "./WelcomeWindow";

const StyledWelcome = styled.div`
    top: 10%;
    left: 5%;
    height: 100%;
    width: 100%;
    ${createBorderStyles()}
    ${createBoxStyles()}
`

const Welcome = props => {
    return (
        <StyledWelcome>
            <WelcomeWindow
                currentFolderName="Welcome"
                close={props.close}
            ></WelcomeWindow>
        </StyledWelcome>
    )
}

export default Welcome;