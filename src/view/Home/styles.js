import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 80px 110px 30px calc(100% - 320px) 80px  ;
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
    h1{
        font-size: 25px;
    }
    
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
    overflow-y: scroll;
    grid-area: task;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 7px;
    box-sizing: content-box;
    margin-top: 20px;
    padding: 0px 0px;
    
`