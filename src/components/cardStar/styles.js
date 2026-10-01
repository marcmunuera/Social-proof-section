import styled from "styled-components";

const StyledContainer= styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 180px;
    padding: 30px 25px;
    background-color: #460330;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border-radius: 10px;
    margin-top: ${props=> props.marginTop};


`
const StyledContainerTop = styled.div`
    display: flex;
    width: 250px;
`
const StyledImg = styled.img`
    border-radius: 100%;
    width: 40px;
    height: 40px;
` 
const StyledContainerNames = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;


`
const StyledContainerBottom = styled.div`
    height: 60px;
    width: 250px;
    text-align: center;
    padding-top: 5px;
    margin: auto;
    font-size: 13px;
    color: #ffe7f8;
`
const StyledCardName = styled.p`
    color: #ffe7f8;
    margin: 0px;
`
const StyledCardSubName = styled.p`
    color: #f663cc;
    margin: 0px;
`
const StyledCardText = styled.p`
    display: flex ;
    box-sizing: border-box;
    margin: auto;
`
export{StyledCardName, StyledCardSubName, StyledContainerNames, StyledContainer, StyledCardText, StyledContainerTop, StyledContainerBottom, StyledImg  }