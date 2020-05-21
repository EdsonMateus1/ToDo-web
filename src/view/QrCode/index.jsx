import React, { useState, useCallback } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./styles";
import Qr from "qrcode.react";
import { useHistory } from "react-router-dom";

export default function QRcode() {
  const [macState, setMac] = useState("");
  const history = useHistory();
  const onMacState = useCallback((e) => {
    setMac(e.target.value);
  }, []);

  const saveMac = useCallback(() => {
    if (!macState) {
      alert("DIGITE O CODIGO QUE APARECEU NA TELA DO SEU CELULAR");
    } else {
      localStorage.setItem("@todo/macandrres", macState);
      history.push("/");
      window.location.reload();
    }
  }, [macState, history]);

  return (
    <S.Container>
      <Header />
      <h1>Capture o QR code pelo APP</h1>
      <strong>Suas atividades serao sincronizadas pelo celular.</strong>
      <S.QRCodeContainer>
        <Qr value="http://www.google.com.br" size={350} />
      </S.QRCodeContainer>
      <strong>Digite o codigo que apareceu na tela do celular</strong>
      <input type="text" onChange={(e) => onMacState(e)} value={macState} />
      <button className="buttonCode" onClick={saveMac}>
        SINCRONIZAR
      </button>
      <Footer />
    </S.Container>
  );
}
