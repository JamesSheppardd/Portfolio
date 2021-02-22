import { useState } from "react";
import Time from "./Time/Time";
import StartButton from "./StartButton";
import styled from "styled-components";
import { createBorderStylesTaskbar, createBoxStyles, createBorderStylesTaskbarInset } from "../Common/index";
import StartMenu from "./StartMenu";
import Window from "../Windows/Window";
import determineTextDocument from "../Desktop/determine-text-document";

const StyledTaskbar = styled.div`
    position: fixed;
    display: flex;
    left: 0%;
    right: 0%;
    bottom: 0%;
    font-size: 1rem;
    z-index: 4;
    ${createBorderStylesTaskbar()}
    ${createBoxStyles()}
`;

const TaskbarInset = styled.div`
    position: absolute;
    display: flex;
    right: 0.3%;
    top: 13%;
    right: 1%;
    bottom: 7%;
    width: 100px;
    font-size: 1rem;
    ${createBorderStylesTaskbarInset()}
    ${createBoxStyles()}
`;


const Taskbar = (props) => {
    const [startMenu, setStartMenu] = useState(false);
    const [textContent, setTextContent] = useState(undefined);
    const [textOpen, setTextOpen] = useState(false);
    const [filename, setFilename] = useState("");
    const triggerStartMenu = () => {
        setStartMenu(prevState => !prevState);
    }

    const closeStartMenu = (e) => {
        

        if(startMenu){
            // break up className into array
            const classNames = e.target.className.split(" ");
            // If the clicked target contains "click-off-area", then close start menu, or keyCode 27 ("escape") is pressed
            if(classNames.includes("click-off-area") || e.keyCode === 27) {
                triggerStartMenu();
            }
        }
    }

    const triggerOpenDocument = (newContent) => {
        setTextContent(() => determineTextDocument(newContent));
        setTextOpen(prevState => !prevState);
        
    }

    const triggerSetFilename = (name) => {
        setFilename(() => name);
    }

    return (
        <div>
            
            <div>
                <StyledTaskbar className="click-off-area taskbar">
                    <TaskbarInset>
                        <Time time={props.time} className="taskbar-time"></Time>
                    </TaskbarInset>
                    <StartButton className="taskbar-start" openStart={triggerStartMenu}></StartButton>
                </StyledTaskbar>
               
            </div>
            {startMenu && <div className="click-off-area" style={{position: "absolute", width: "100%", height: "100%", top: "0%", zIndex: 9998}} onClick={closeStartMenu} onKeyDownCapture={closeStartMenu}></div>}
            {startMenu && <StartMenu openDocument={triggerOpenDocument} setFilename={triggerSetFilename}></StartMenu>}

            { textOpen && <Window 
                className="text-document"
                leftPos="30" 
                topPos="3" 
                currentFolderName={filename}
                triggerWindow={triggerOpenDocument}
                isFileExplorer={false}
                content={textContent}
            /> }
        </div>
    )
}

export default Taskbar;