import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as S from "./styles";
import Qr from "qrcode.react";

export default function QRcode() {
  return (
    <S.Container>
      <Header />
      <h1>Capture o QR code pelo APP</h1>
      <S.QRCodeContainer>
        <Qr value="getmacaddress" size={350}/>
      </S.QRCodeContainer>
      <h1>Suas tarefas serao sincronizadas</h1>
      <Footer />
    </S.Container>
  );
}
