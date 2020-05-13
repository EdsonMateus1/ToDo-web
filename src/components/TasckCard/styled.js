import styled from "styled-components";

export const Container = styled.div`
    width: 200px;
    height:  150px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    box-shadow: 2px 3px 7px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items : center;
    margin : 15px 13px;
    padding:3px;
    position: relative;
    transition: 0.3s ease ; 
    overflow: hidden;
    &:hover{
        cursor: pointer;
        opacity: 0.5;
    }
    opacity: ${prosp => prosp.done ? 0.5 : 1}

`
export const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%;
    width : 100%;
    padding: 10px;
    margin-bottom: 10px;
    h3{
        font-size: 1em;
    }
    img{
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 800px) {
        img{
        width: 40px;
        height: 40px;
    }
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
        font-size: 1em;
    }
    span{
        color: #707070;
        font-size: 1em;

    }
    
`