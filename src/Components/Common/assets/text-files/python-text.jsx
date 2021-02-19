import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const PythonText = () => {
    return (
        <StyledDiv className="active">
            <p>
            I started using python very basically at around 10, and after about 2 weeks dropped it, as I didn’t understand any of it. However, a couple of years later we started using it in school, and ever since I 
            was around 14, I have used it quite a bit. I have made many small programs, mainly for my iGCSE exams and practice exams, but have also made a very basic password generator and storage system, as well as 
            using pyagme to make a clone of Google’s no internet dinosaur run game, but voice controlled.
            </p>
            <br />
            <p>
            I would say I am moderately skilled in python, as there is definitely a lot more to learn, but I can pass and due to using other languages understand many of the concepts pretty well.
            </p>
        </StyledDiv>
        
    )
}
export default PythonText;