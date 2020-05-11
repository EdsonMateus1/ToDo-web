import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TasckCard";
import FilterCard from "../../components/FilterCard";
import typeIcons from "../../utils/typeIcons";
import axios from "../../service/api";
import * as S from "./styles";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  
  return (
    <S.Container>
      <Header />
      <S.ContainerFilter>
        <FilterCard
          title="Todos"
          active={activeFilter === "all"}
          onActive={() => {
            setActiveFilter("all");
          }}
        />
        <FilterCard
          title="Hoje"
          active={activeFilter === "today"}
          onActive={() => {
            setActiveFilter("today");
          }}
        />
        <FilterCard
          title="Semana"
          active={activeFilter === "week"}
          onActive={() => {
            setActiveFilter("week");
          }}
        />
        <FilterCard
          title="Mes"
          active={activeFilter === "month"}
          onActive={() => {
            setActiveFilter("month");
          }}
        />
        <FilterCard
          title="Ano"
          active={activeFilter === "year"}
          onActive={() => {
            setActiveFilter("year");
          }}
        />
      </S.ContainerFilter>

      <S.ContainerHR>
        <hr></hr>
        <div>
          <h1>Tarefas</h1>
        </div>
      </S.ContainerHR>
      <S.ContainerTakc>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </S.ContainerTakc>
      <Footer />
    </S.Container>
  );
}
