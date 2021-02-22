import styled from "styled-components";

const WindowOptionsStyled = styled.div`
    position: absolute;
    top: 46px;
    left: 0;
    font-size: 22px;
`;

const WindowOptions = props => {
    return (
        <WindowOptionsStyled className={props.className}>
            <span className={`${props.className}__file`} style={{paddingLeft:25}}><span style={{textDecoration: "underline", textUnderlineOffset: 3 }}>F</span>ile</span>
            <span className={`${props.className}__edit`} style={{paddingLeft:25}}><span style={{textDecoration: "underline", textUnderlineOffset: 3 }}>E</span>dit</span>
            <span className={`${props.className}__view`} style={{paddingLeft:25}}><span style={{textDecoration: "underline", textUnderlineOffset: 3 }}>V</span>iew</span>
            <span className={`${props.className}__help`} style={{paddingLeft:25}}><span style={{textDecoration: "underline", textUnderlineOffset: 3 }}>H</span>elp</span>
        </WindowOptionsStyled>
    )
}

export default WindowOptions;