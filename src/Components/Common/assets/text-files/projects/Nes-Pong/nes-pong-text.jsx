import styled from "styled-components";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";

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
    margin-right: 13px;
`;

const NESPongText = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/NES-Pong", "_blank");
    }
    const openItch = () => {
        window.open("https://jamessheppard.itch.io/nes-pong", "_blank");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository}>View Repository</SelectorButton>
                <SelectorButton onClick={openItch}>Play the game!</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}>
                <u>{props.filename}</u>
            </h2>
            <p style={{textAlign: 'left'}}>
                NES-Pong is my first standalone NES game, programmed in 6502 assembly using the ca65 assembler - part of the cc65 compiler - and it was made
                partially following the <a href="https://nerdy-nights.nes.science/" target="_blank" rel="noreferrer">Nerdy Nights</a> tutorial, then expanded upon. It currently has
                no audio, as that requires a lot of backendy type work, such as creating your own audio engine, and I feel as if that is a bit overkill for
                what is in actual fact just a test programme, but it is fully functional.
            </p>
            <p>
                To play follow the instructions on my <a href="https://jamessheppard.itch.io/nes-pong" target="_blank" rel="noreferrer">Itch.io</a> page, and note it is a 2-player game.
            </p>
            
            <p style={{color:"grey"}}>______________________________________________________</p>
            <h2 style={{textDecoration: "underline", textAlign: "center"}}>Here's some screenshots</h2> 
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
export default NESPongText;