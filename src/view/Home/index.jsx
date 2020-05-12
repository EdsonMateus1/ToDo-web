import React, { useState, useEffect, useCallback } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TasckCard";
import FilterCard from "../../components/FilterCard";
import axios from "../../service/api";
import * as S from "./styles";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [taskState, setTask] = useState([]);
  const gettaks = useCallback(async () => {
    const date = await axios.get(`/filter/${activeFilter}/11:11:11:11:11:11`);
    setTask(date.data);
  }, [activeFilter]);
  useEffect(() => {
    gettaks();
  }, [gettaks, activeFilter]);

  const setNotification = useCallback(() => {
    setActiveFilter("late");
  }, []);
  return (
    <S.Container>
      <Header onListLate={setNotification} />
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
          <h1>{activeFilter !== "late" ? "Tarefas" : "Tarefas Atrasadas"}</h1>
        </div>
      </S.ContainerHR>
      <S.ContainerTakc>
        {taskState.map((e) => (
          <TaskCard key={e._id} title={e.title} type={e.type} when={e.when} />
        ))}
      </S.ContainerTakc>

      <Footer />
    </S.Container>
  );
}
