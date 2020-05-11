import React from "react";
import * as S from "./styled";
import logoTodo from "../../assets/todo.png";
import logoBell from "../../assets/Icon awesome-bell.png";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <S.Container>
      <S.Img src={logoTodo} alt="logo todo " />

      <S.ConLinks>
        <Link to="/">Inicio</Link>
        <p className="divi"></p>
        <Link to="/register">Nova tarefa</Link>
        <p className="divi"></p>
        <Link href="#">Conectar com celular</Link>
        <p className="divi"></p>
        <img src={logoBell} alt="imagem sino de noticacoes" />
        <span>5</span>
      </S.ConLinks>
    </S.Container>
  );
}
