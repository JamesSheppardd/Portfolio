import styled from "styled-components";

const StyledTime = styled.div`
    position: absolute;
    font-size: 22px;
    text-align: center;
    width: 100%;
    height: 100%;
    left: 0;
    top: 15%;
`;

const displayTime = (props) => (
    <StyledTime className={props.className}>
        <p style={{margin: 0, padding: 0}}>{props.time}</p>
    </StyledTime>
)

export default displayTime;