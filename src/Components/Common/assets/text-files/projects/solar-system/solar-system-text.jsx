import styled from "styled-components";
import img1 from "./solarsystem1.gif";
import img2 from "./solarsystem2.gif";

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

const SolarSystemText = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/JSSolarSystem", "_blank");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository}>View Repository</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}>
                <u>{props.filename}</u>
            </h2>
            <p style={{textAlign: 'left'}}>
                This is a rough simulation of a Solar System using JavaScript canvas elements.
                You can create new bodies to orbit the central star, adding your own mass, name, and size to the body. It uses Newton’s law of universal gravitation - F=G (m_1 m_2)/r^2  – to calculate the force 
                of gravitational attraction each body experiences, with an initial orbital velocity which is calculated using the mean orbital speed equation - v=√(2&GM/r). You can also click on a body to see 
                some of its properties, and the project uses a random noise function to generate random stars.
            </p>

            <p style={{color:"grey"}}>______________________________________________________</p>
            <h3 style={{textAlign: "center"}}>Here's some gifs of the project</h3> 
            <div style={{textAlign: "center"}}>
                <img src={img1} alt="1" width={600} className="text-image" />
                <br />
                <img src={img2} alt="2" width={600} className="text-image" />
            </div>
        </StyledDiv>
        
    )
}
export default SolarSystemText;