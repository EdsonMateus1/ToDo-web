import React from "react";
import logoFilter from "../../assets/Icon awesome-filter.png";
import * as S from "./styled";

export default function FilterCard({ title ,active ,onActive}) {
  return (
    <S.Card active={active} onClick={onActive}>
      <img src={logoFilter} alt="Filter" />
      <span>{title}</span>
    </S.Card>
  );
}
