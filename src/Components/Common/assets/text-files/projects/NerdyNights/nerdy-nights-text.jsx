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

const NerdyNightsText = (props) => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/Nerdy-Nights-ca65-Translation", "_blank");
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
                This is a translation of the <a href="https://nerdy-nights.nes.science/" target="_blank" rel="noreferrer">Nerdy Nights</a> tutorial series by Brian Parker, which was originally written
                for the NESASM assembler, translated into the ca65 assembler. 
            </p>
            <p>
                I created this while working through the tutorial series myself, as I prefer using the ca65 assembler, and when trying to read what was written in NESASM
                for the tutorial series, and then trying to understand what that meant by looking through a decade old documentation to translate it, I thought it was a 
                good idea to publish my entire translation of the series for beginners to refer to, rather than going through all the pain I had to. 
            </p>
            <p>
                I plan to expand on it in the future to contain the other tutorials covered in the Nerdy Nights series, such as audio for the NES, and then continue to update
                this repo with the new translations. But, for now it is limited to the first basic series on the site.
            </p>
        </StyledDiv>
        
    )
}
export default NerdyNightsText;