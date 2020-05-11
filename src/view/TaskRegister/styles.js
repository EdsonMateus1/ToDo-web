import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-rows: 80px calc(100vh - 180px) 80px;
    grid-template-areas: "header"  "form" "footer";
    gap: 10px;
    h3{
        color: #707070;
        margin: 5px 0px;
    }
    .button{
        width : 100%;
        height: 35px;
        background-color: #EE6516;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-size: 20px;
    }
    button{
        cursor: pointer;
    }
`

export const FormContainer = styled.form`
    grid-area: form;
    display: grid;
    height: 500px;
    justify-content: center;
    grid-template-rows: 60px 400px;
   
`

export const DivIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    .inative{
        opacity: 0.5;
        transition: 0.3s ease-in-out;
    }
    button{
        border: none;
    }
    img{
        width: 60px ;
        height: 60px;
        margin: 0px 20px;
        cursor: pointer;

    }
   
`
export const divFomr = styled.div`
    justify-self: center;
    margin-top: 10px;


`

export const divTitleInput = styled.div`
    h3{
        color: #707070;
        margin: 2px 0px;
    }
    input{
        border: none;
        width: 100%;
        border-bottom: solid 1px #EE6516 ;
    }

`

export const divDescriptionInput = styled.div`
    textarea{
        width: 55vw;
        height: 22vh;
        resize: none;
        border: solid 1px #EE6516;
        border-radius: 3px;
        
    }

`
export const divDateTimeInput = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    
    input{
        border: none;
        width: 55vw;
        border-bottom: solid 1px #EE6516 ;
    }
`
export const divButtonsInput = styled.div`
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        border: none;
        color: #707070;
        font-size: 20px;
    }
    h3{
        margin-left: 8px;
        color: #707070;
    }
`
