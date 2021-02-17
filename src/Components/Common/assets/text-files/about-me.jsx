import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: 23px;
    padding: 0px 5px;
    text-align: center;
`;

const AboutMeText = () => {
    return (
        <StyledDiv>
            <p>
                -----Who are you?-----<br />Hi! My name's James, and I'm a 16 year old developer from London, UK, and have been programming on and off since I was around 8, starting off by using everyone's favourite (and the most respected)
                game engine out there - Scratch.
            </p>
            < br/>
            <p>
                -----How did you learn to code?-----<br />
                I started off by learning Scratch at a weekly club called <a href="https://spark4kids.com/" target="_blank" rel="noreferrer">Spark-4-Kids</a>, and towards the end of my time there I began to learn 
                <em>VERY</em> basic python, and also a smidge of HTML/CSS, and if my memory isn't playing tricks on me, I think I made a website talking about minecraft. If so, I hope one day I'll be able to relocate
                it, as I think it would be pretty funny to look at.
            </p>
            < br/>
            <p>
                -----So, what are you doing now?-----<br />
                Right now I am generally trying to just improve overall at my ability to code, preferrably using as many languages as I see fit. More specifically, I am learning how to use ReactJS, which is the library 
                I used to make this site. If you want to be <em>even</em> more specific, have a look at my <a href="https://github.com/JamesSheppardd" target="_blank" rel="noreferrer">Github</a>, and just have a general look about :)
            </p>
        </StyledDiv>
        
    )
}
export default AboutMeText;