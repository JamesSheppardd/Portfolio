import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const GMLText = () => {
    return (
        <StyledDiv>
            <p>
            GML (Gamemaker Language) was a language I picked up during school, where we were set a project to make a game over the term, so that weekend I gathered as much knowledge as I could, and made an admittedly 
            bad rendition of a Pacman clone. Nonetheless, I was proud of it. I entered Bafta Young Game Designers competition twice with games made in GML, the more notable being a short rpg where you are set a task 
            to create a brain.
            </p>
            <br />
            <p>
            I am quite confident using GML, but realising it’s limits was one reason I decided to learn C#, and thus the Unity Engine, so will probably not revisit the language anytime soon.
            </p>
            <br />

            <h2><u>Notable projects:</u></h2>
            <ul>
                <li><a href="https://jamessheppard.itch.io/the-only-way-is-up" target="_blank" rel="noreferrer">The Only Way Is Up</a></li>
            </ul>
            
        </StyledDiv>
        
    )
}
export default GMLText;