import styled from "styled-components";
import img1 from "./project-b1.png";
import img2 from "./project-b2.png";
import img3 from "./project-b3.png";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const SelectorButton = styled.button`
    position: relative;
    height: 30px;
    top: 15px;
    text-align: start;
    font-size: 19px;
    text-indent: ${props => props.textIndent}%;
    background-color: #c6c6c6;
    transform: scale(1.1);
    overflow-x: hidden;
`;

const ProjectB = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/Project-B", "_blank");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository}>View Repository</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}>
                <u>{props.filename}</u>
            </h2>
            <p style={{textAlign: "left"}}>
                Project B is a short rpg I made for the BAFTA Young Game Designers competition in 2018. It was the first game I ever entirely completed, and even though looking back on the project there is lots 
                I would do differently, it was a great learning experience, teaching me about basic world design and actually finishing a game.
            </p>

            <p style={{color:"grey"}}>______________________________________________________</p>
            <h2 style={{textAlign: "center"}}>Here's some screenshots</h2> 
            <div style={{textAlign: "center"}}>
                <img src={img1} alt="1" width={600} className="text-image" />
                <br />
                <img src={img2} alt="2" width={600} className="text-image" />
                <br />
                <img src={img3} alt="3" width={600} className="text-image" />
            </div>
        </StyledDiv>
        
    )
}
export default ProjectB;