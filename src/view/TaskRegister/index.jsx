import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import icons from "../../utils/typeIcons";
import * as S from "./styles";

export default function Task() {
  const [type, setType] = useState();
  return (
    <S.Container>
      <Header />
      <Footer />
      <S.FormContainer>
        <S.DivIcons>
          {icons.map(
            (elemnt, index) =>
              index > 0 && (
                <button type="button" onClick={() => setType(index)}>
                  <img
                    src={elemnt}
                    alt="icons"
                    className={type && type !== index && "inative"}
                  />
                </button>
              )
          )}
        </S.DivIcons>
        <S.divFomr>
          <S.divTitleInput>
            <h3>Titulo</h3>
            <input type="text" />
          </S.divTitleInput>

          <S.divDescriptionInput>
            <h3>Descricao</h3>
            <textarea />
          </S.divDescriptionInput>

          <S.divDateTimeInput>
            <h3>Data</h3>
            <input type="date" />
           
          </S.divDateTimeInput>

          <S.divDateTimeInput>
            <h3>Hora</h3>
            <input type="time" />
        
          </S.divDateTimeInput>

          <S.divButtonsInput>
            <div>
              <input type="checkbox" />
              <h3>Concluido</h3>
            </div>
            <button type="button">Excluir</button>
          </S.divButtonsInput>

          <button className="button" type="submit">
            Salvar
          </button>
        </S.divFomr>
      </S.FormContainer>
    </S.Container>
  );
}
