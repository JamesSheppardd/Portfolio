import styled from "styled-components";

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
`;


const PortfolioText = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/Portfolio", "_blank");
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
            I decided that I would probably need a website to act as a portfolio at some point, and so after 2 months of learning JavaScript, I thought it would be a good way to bring all I had learnt together, and 
            to test myself out by learning something new – React. 
            </p>
            <br />
            <p>
            During the creation of the site, I learnt about using external modules, and how to implement them, and also reinforced my knowledge of CSS and HTML, and along the way learnt about basic concepts of React, 
            such as components and state hooks. Furthermore, I started to scratch the surface of Git and Github, learning how to push commits, and other essentials needed to use Git.
            </p>
        </StyledDiv>
    )
}
export default PortfolioText;