import { useState } from "react";
import Time from "./Time/Time";
import StartButton from "./StartButton";
import styled, { css } from "styled-components";
import { createBorderStylesTaskbar, createBoxStyles, createBorderStylesTaskbarInset } from "../Common/index";
import StartMenu from "./StartMenu";

const StyledTaskbar = styled.div`
    position: fixed;
    display: flex;
    left: 0%;
    right: 0%;
    bottom: 0%;
    top: 94.3%;
    font-size: 1rem;
    ${createBorderStylesTaskbar()}
    ${createBoxStyles()}
`;

const TaskbarInset = styled.div`
    position: absolute;
    display: flex;
    padding: 18px 60px;
    right: 0.3%;
    top: 12%;
    font-size: 1rem;
    ${createBorderStylesTaskbarInset()}
    ${createBoxStyles()}
`;


const Taskbar = (props) => {
    const [startMenu, setStartMenu] = useState(false);
    const triggerStartMenu = () => {
        setStartMenu(prevState => !prevState);
    }

    return (
        <div>
            <StyledTaskbar>
                <TaskbarInset>
                    <Time time={props.time} className="taskbar-time"></Time>
                </TaskbarInset>
                <StartButton className="taskbar-start" openStart={triggerStartMenu}></StartButton>
            </StyledTaskbar>
            {startMenu && <StartMenu></StartMenu>}
        </div>
    )
}

export default Taskbar;