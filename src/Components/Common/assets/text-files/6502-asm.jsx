import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const ASM6502 = () => {
    return (
        <StyledDiv>
            <p>
                I began learning 6502 Assembly in mid-July of 2021, as I wanted to start to make NES games that would run on original hardware, because I thought it would be an interesting challenge for 
                myself, and help me learn Assembly conventions, such as learning about the stack, loading data into registers and so on, for school.
            </p>
            <br />
            <p>
                Through learning 6502, I have gone down many rabbit holes in old forums, and really come to appreciate how old games were programmed, as well as a wider range of software, due to the 6502 
                being a chip used in products such as the Apple II and Commodore 64. 
            </p>
            <br />
            <p>
                I am still definitely not fluent in 6502, however I can create – and have created – simple games that would run on an NES console, and think that is a really cool thing to be able to do, 
                so even though it is not used at all nowadays, I think it’s a pretty fun language to use.
            </p>
            <br />

            <h2><u>Notable projects:</u></h2>
            <ul>
                <li><a href="https://github.com/JamesSheppardd/Nerdy-Nights-ca65-Translation" target="_blank" rel="noreferrer">Nerdy Nights translated to ca65</a></li>
                <li><a href="https://github.com/JamesSheppardd/NES-Pong" target="_blank" rel="noreferrer">NES-Pong</a></li>
            </ul>
            
        </StyledDiv>
        
    )
}
export default ASM6502;