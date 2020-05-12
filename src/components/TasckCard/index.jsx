import React, { useMemo } from "react";
import { format } from "date-fns";
import icons from "../../utils/typeIcons";
import * as S from "./styled";

export default function TaskCard({ title, when, type }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"),[when]);
  const hour = useMemo(() => format(new Date(when), "HH:mm"),[when]);

  return (
    <S.Container>
      <S.TopCard>
        <img src={icons[type]} alt="icone padrao" />
        <h3>{title}</h3>
      </S.TopCard>
      <S.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>
      </S.BottomCard>
    </S.Container>
  );
}
