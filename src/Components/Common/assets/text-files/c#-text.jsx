import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const CSText = () => {
    return (
        <StyledDiv>
            <p>
            I started to use C# in April of 2020, due to being bored in the coronavirus lockdown, and after some time of learning the basics I dived right into Unity Game Engine, to see what I could create. In my 
            short time of using the language, I made a couple of small apps, and branched out into a small bit of modelling with blender, but I wouldn’t say I’m the best at that. 
            </p>
            <br />
            <p>
            I would say I am still a novice to the language, as I did not learn the core basics too in depth, and it was mainly a quick summer experience, but I know enough to create simple applications with it.
            </p>
            <br />
            <h2><u>Notable projects:</u></h2>
            <ul>
                <li><a href="https://github.com/JamesSheppardd/CurrentWeather" target="_blank" rel="noreferrer">Current Weather App</a></li>
            </ul>
            
        </StyledDiv>
        
    )
}
export default CSText;