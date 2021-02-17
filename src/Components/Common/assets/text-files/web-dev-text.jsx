import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const WebDevText = () => {
    return (
        <StyledDiv>
            <p>
            I only properly started to get interested in web development after seeing videos and streams from people like <a href="https://www.twitch.tv/ottomated" target="_blank" rel="noreferrer">Ottomated</a>, and so decided at the end of 2020 (literally the end – I started on the 31st of 
                December), that this would be my next endeavour. With lots of googling and hours spent scrolling through stack overflow questions, I feel like I have definitely formed a strong foundation in both 
                HTML/CSS, and my JavaScript is rapidly improving.
            </p>
            <br />
            <p>
            After two months of messing around in plain JavaScript, I decided to dive into React, and I am loving it so far. This website is the first thing I have made using React, and have had a pretty 
            enjoyable time learning about using components, and using some state hooks. All in all, I would say for the time I have spent making this website, I am proud of how it has come out, and think it fits 
            with my retro ‘Windows 95’ feel.
            </p>
        </StyledDiv>
        
    )
}
export default WebDevText;