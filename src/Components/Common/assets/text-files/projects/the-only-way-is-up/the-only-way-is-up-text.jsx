import styled from "styled-components";
import img1 from "./onlywayisup1.png";
import img2 from "./onlywayisup2.png";
import img3 from "./onlywayisup3.png";


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

const OnlyWayIsUp = (props) => {
    const openRepository = () => {
        window.open("https://jamessheppard.itch.io/the-only-way-is-up", "_blank");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository}>Play the game!</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}>
                <u>{props.filename}</u>
            </h2>

            <p style={{textAlign: 'left'}}>
                ‘The Only Way Is Up’ is a game I made in a weekend as my first ever game jam game, and is heavily inspired by Jump King and other games of that genre of difficult games, such as Getting Over It. 
                It was my first time creating everything apart from the font for the game, including visuals and the music and sounds. Due to it being a jam game, and me not being too experienced at the time there 
                is an issue where on slower machines the movement works in slow motion due to me not being familiar with concepts of delta time, however everyone who has played it and got back to me seems to enjoy 
                it, so why not challenge yourself?
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
export default OnlyWayIsUp;