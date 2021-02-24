import styled from "styled-components";
import { createBorderStylesInner, createInnerBoxStyles } from "../Common/index";
// Assets
import tipOfDay from "../Common/assets/images/icons/Tip of the Day.ico" 

const StyledWindow = styled.div`
    position: absolute;
    
    
    
    bottom: 100px;
    ${createBorderStylesInner()}
    ${createInnerBoxStyles()}
    background-color: #faf2d4;
    font-size: 20px;
    overflow: auto;
`;


const WindowInner = props => {
    //let isPhone = window.matchMedia("only screen and (min-device-width: 320px) and (max-device-width: 480px)").matches;


    return (
        <div className="welcome-window-inner--window" style={{height: 0}}>
            <StyledWindow className="welcome-window-inner">
                <img className="welcome-window-inner__icon" src={tipOfDay} alt="" width={48}></img>
                <div className="welcome-window-inner__content">   
                    <h2>Hi There!</h2>
                    
                    <p>
                    Welcome to my website! Feel free to open any of the folders or documents on the desktop, doing so by double clicking (or double tapping, if on a touchscreen device), or click on the "Start" button in 
                    the taskbar in the bottom left for more readily available documents.
                    </p>
                </div>

                
            </StyledWindow>
        </div>
    )
}

export default WindowInner;