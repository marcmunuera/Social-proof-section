import styled from "styled-components";

const StyledContainer= styled.div`
    width: 350px;
    height: 200px;
    background-color: purple;
    border: 1px solid black;
    display: flex;
    flex-direction: column;


`

const StyledCardName = styled.p`
    color: red;
`
const StyledCardSubName = styled.p`
    color: blue;
`
export{StyledCardName, StyledCardSubName, StyledContainer}