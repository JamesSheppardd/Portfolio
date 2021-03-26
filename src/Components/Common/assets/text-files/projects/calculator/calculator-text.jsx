import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
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

const CalculatorText = () => {
    const openRepository = () => {
        window.open("https://github.com/JamesSheppardd/simple-calculator", "_blank");
    }
    const openInstall = () => {
        window.open("https://github.com/JamesSheppardd/simple-calculator/releases/tag/1.0.0");
    }

    return (
        <StyledDiv>
            <div style={{textAlign: "center"}}>
                <SelectorButton onClick={openRepository} style={{left: -10}}>View Repository</SelectorButton>
                <SelectorButton onClick={openInstall} style={{left: 10}}>Download</SelectorButton>
            </div>
            <h2 style={{textAlign: "center"}}><u>Calculator</u></h2>
            <p>This is a simple calculator created with the Electron framework, and written in TypeScript and JavaScript.</p>
            <p style={{color:"grey"}}>______________________________________________________</p>
            <p>I used the <a href="https://www.npmjs.com/package/math-expression-evaluator" target="_blank" rel="noreferrer">math expression evaluator's</a> eval function to parse the calculations from a string into 
            an understandable JS calculation, and this module made it possible to add more complex mathematical functions, such as trigonometry or pi.</p>
            <p style={{color:"grey"}}>______________________________________________________</p>
            <div style={{textAlign: "center"}}>    
                <img className="text-image" src="https://raw.githubusercontent.com/JamesSheppardd/simple-calculator/main/assets/readme_images/calculator2.png" alt="img_1"></img>
                <p></p>
                <img className="text-image" src="https://raw.githubusercontent.com/JamesSheppardd/simple-calculator/main/assets/readme_images/calculator1.png" alt="img_2"></img>
            </div>
        </StyledDiv>
        
    )
}
export default CalculatorText;