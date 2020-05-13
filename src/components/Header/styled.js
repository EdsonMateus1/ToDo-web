import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    width: 100%;
    height: 80px;
    display:flex;
    justify-content: space-between;
    border-bottom: solid 3px #EE6516;
    background-color: #20295F;
    padding: 1px 6px;
    align-items: center;
`
export const Img = styled.img`
    width: 120px;
    
`
export const ConLinks = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-around;
    position: relative;
    img{
        width: 30px;
        height: 20px;
        cursor: pointer;
        &:hover{
            opacity: 0.5;
        }
    }

    a{
        text-decoration: none;
        color: #ffff; 
        cursor: pointer;
        
        &:hover{
            color:  #EE6516;
        }
    }
    span{
        text-align: center;
        color:  #EE6516;
        background-color: #fff; 
        position: absolute;
        width: 20px;
        height: 20px ;
        top: -10px;
        right: 0px;
        border-radius: 50%;
        padding-bottom: 10px;
        cursor: default;
    }
    .divi::after{
        content: "|";
        color: #fff;
    }

`