import React, { useCallback, useState, useEffect } from "react";
import * as S from "./styled";
import logoTodo from "../../assets/todo.png";
import logoBell from "../../assets/Icon awesome-bell.png";
import axios from "../../service/api";
import { Link } from "react-router-dom";

export default function Header({ onListLate }) {
  const [latekStateCout, setLate] = useState([]);

  const getLate = useCallback(async () => {
    const date = await axios.get(`/filter/late/11:11:11:11:11:11`);
    setLate(date.data.length);
  }, []);
  useEffect(() => {
    getLate();
  }, [getLate, latekStateCout]);
  return (
    <S.Container>
      <S.Img src={logoTodo} alt="logo todo " />

      <S.ConLinks>
        <Link to="/">Inicio</Link>
        <p className="divi"></p>
        <Link to="/register">Nova tarefa</Link>
        <p className="divi"></p>
        <Link to="#">Cadastrar Celular</Link>
        <p className="divi"></p>
        <img
          onClick={onListLate}
          src={logoBell}
          alt="imagem sino de noticacoes"
        />
        <span>{latekStateCout}</span>
      </S.ConLinks>
    </S.Container>
  );
}
