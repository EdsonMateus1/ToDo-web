import styled from "styled-components";

export const Container = styled.div`
    grid-area: task;
    width: 200px;
    height:  150px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    box-shadow: 0px 1px 5px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    margin : 5px 13px;
    padding:3px;
    position: relative;
    transition: 0.3s ease ; 
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
`
export const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width : 100%;
    padding: 10px;
    margin-bottom: 10px;
    img{
        width: 60px;
        height: 60px;
    }
   

`
export const BottomCard = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 3px;
    position: absolute;
    bottom: 1px;

    strong{
        color: #EE6516;
    }
    span{
        color: #707070;
        font-size: 18px;

    }

`