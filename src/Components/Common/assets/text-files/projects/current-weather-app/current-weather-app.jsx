import styled from "styled-components";
import img1 from "./photo1.png";
import img2 from "./photo2.png";
import img3 from "./photo3.PNG";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: left;
    overflow-x: hidden;
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
`;

const CurrentWeatherApp = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/CurrentWeather", "_blank");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository}>View Repository</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}>
                <u>{props.filename}</u>
            </h2>
            <p>
            During the UK's first lockdown during March and April I, like so many others, decided to use all my newfound time to learn something new. I decided this new skill would be something that I wouldn't just 
            give up on after the lockdown, and so began to learn C#, as it was something I knew would be useful long-term, as well as something that I would find enjoyable. After a couple of months of familiarising 
            myself with the basics of the language, and the Unity game engine, I thought I should actually create something to show off what I had learnt. With this idea in mind, I set to work thinking of something 
            simple to make, yet fulfilling – and also decided to complete it in 24 hours. After browsing YouTube one day, I found a video called "<a href="https://www.youtube.com/watch?v=PnCtUemkqZs&t=0s" target="_blank" rel="noreferrer">Displaying REAL-WORLD Weather in Unity (using REST APIs)</a>” made by a 
            channel called Polymars, and thought it was the exact thing I wanted to make. And so, I did.
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
export default CurrentWeatherApp;