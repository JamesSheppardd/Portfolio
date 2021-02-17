import taskbar from "./taskbar.svg";
import Time from "./Time/Time";
import StartButton from "./StartButton/StartButton";

const Taskbar = (props) => (
    <div>
        <object data={taskbar} className="taskbar"></object>
        <Time time={props.time} className="taskbar-time"></Time>
        <StartButton className="taskbar-start_button"></StartButton>
    </div>
)

export default Taskbar;