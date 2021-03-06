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

const Boilerplate = (props) => {
    const openRepository = () => {
        window.open("", "_blank");
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
export default Boilerplate;