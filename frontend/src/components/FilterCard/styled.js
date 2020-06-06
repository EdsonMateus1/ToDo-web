import styled from "styled-components";

export const Card = styled.div` 
      width : 15%; 
      height: 80px ;
      background-color: ${props => props.active ? "#EE6516" :  "#20295F"};
      border-radius: 8px;
      padding: 10px;
      position: relative;
      cursor: pointer;
     img{
        width: 25px;
        height: 25px;
     } 
     span{
         color: #fff;
         position: absolute;
         right: 4px;
         bottom: 2px; 
     }
     &:hover{
         background-color: #EE6516;
     }

`