import styled from "styled-components";


export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 80px calc(100% - 180px) 80px;
    grid-template-areas: "header"  "form" "footer";
    gap: 10px;
    h3{
        color: #707070;
        margin: 5px 0px;
    }
    .button{
        width : 90%;
        height: 45px;
        background-color: #EE6516;
        border: none;
        border-radius: 10px;
        color: #ffffff;
        font-size: 20px;
        margin-top: 27px;
        box-shadow: 1px 1px 5px #EE6516 ;
        outline: 0;
        
    }
    button{
        cursor: pointer;
    }
`

export const FormContainer = styled.form`
    justify-items: center;
    grid-area: form;
    display: grid;
    max-height: 100%;
    justify-content: center;
    grid-template-rows: 60px 400px;
   
`

export const DivIcons = styled.div`
    justify-items: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    .inative{
        opacity: 0.5;
        transition: 0.3s ease-in-out;
    }
    button{
        border: none;
    }
    img{
        max-width: 50px ;
        max-height: 50px;
        margin: 0px 2px;
        cursor: pointer;

    }
   
`
export const divFomr = styled.div`
    justify-self: center;
    margin-top: 20px;


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
        &::-webkit-input-placeholder {
        color: red;
        }
        &:focus{
            outline: 0;
        }
    }

`

export const divDescriptionInput = styled.div`

    
    textarea{
        width: 55vw;
        height: 22vh;
        resize: none;
        border: solid 1px #EE6516;
        border-radius: 3px;
        &::-webkit-input-placeholder {
        color: red;
        }
        &:focus{
            outline: 0;
        }
        
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
        &:focus{
            outline: 0;
        }
    }
`
export const divButtonsInput = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    input:hover{
        cursor: pointer;
    }
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
