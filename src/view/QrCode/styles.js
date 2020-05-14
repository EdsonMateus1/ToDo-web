import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        color: #EE6516;
        font-size: 1.5em;
        margin: 8px 0px;
    }
    header{
        position: absolute;
        top: 0px;
    }
    footer{
        position: absolute;
        bottom: 0px;
    }
`

export const QRCodeContainer = styled.div`
    width: 350px;
`