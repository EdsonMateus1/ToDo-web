import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "header" "main" "footer";
    grid-template-rows: 10% calc(100% - 20%) 10%;
    gap :5px;
    overflow : hidden; 
    @media screen  and (max-width: 380px) {
        overflow: scroll;
    }
  
    h1{
        color: #EE6516;
        font-size: 1.5em;
        margin: 8px 0px;
    }
    .buttonCode{
        width : 300px;
        height: 35px;
        background-color: #EE6516;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-size: 20px;
        margin: 10px 0px;
        box-shadow: 1px 1px 5px #EE6516 ;
        cursor: pointer;
        outline: 0;
        
    }
    input{
        width : 300px;
        height: 30px;
        border: solid 2px #EE6516 ;
        border-radius: 10px;
        
        &:focus{
            outline: 0;
        }
    }
    strong{
        margin: 10px 0px;
    }
`

export const QRCodeContainer = styled.div`
    width: 350px;
`
export const MainContainer = styled.div`
    grid-area: "main";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`