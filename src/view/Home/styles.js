import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 80px 110px 40px calc(100vh - 330px) 80px ;
    grid-template-areas: "header"  "card" "hr" "task" "footer";
    gap: 5px;
`


export const ContainerFilter = styled.div`
      grid-area : card;  
      width : 100%; 
      height: 120px ;
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 5px;
  
`
export const ContainerHR = styled.div`
    grid-area: hr;
    width: 100%;
    height: 0px ;
    margin-top: 30px;
    color: #707070;
    div{
        width: 200px;
        background-color: #fff; 
        margin: 0px auto;
        position: relative;
        top: -20px;
        display: flex;
        justify-content:center;

    }

`
export const ContainerTakc = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 7px;
    box-sizing: content-box;
    margin-top: 20px;
    
`