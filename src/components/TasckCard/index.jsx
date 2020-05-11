import React from "react"
import iconDefaul from "../../assets/diversos.png";
import * as S from "./styled";



export default function TaskCard({title,data,time}){
    return(
        <S.Container>
            <S.TopCard>
                <img src={iconDefaul}  alt="icone padrao"/>
                <h3>Ligar o carro</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>20-02-2020</strong>
                <span>10:00</span>
            </S.BottomCard>
        </S.Container>
    )
}