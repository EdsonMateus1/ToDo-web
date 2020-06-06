import React, { useState, useCallback, useEffect } from "react";
import { View, ScrollView } from "react-native";
import api from "../../services/api";
import styles from "./styles";

//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FilterCard from "../../components/FilterCard";
import TodoCard from "../../components/TodoCard";
import CutLine from "../../components/CutLine";

export default function Home({ navigation }) {
  const [filterState, setFilter] = useState("all");
  const [taskState, setTaks] = useState([]);

  const getTaks = useCallback(async () => {
    const res = await api.get(`/filter/${filterState}/11:11:11:11:11:11`);
    setTaks(res.data);
  }, [filterState]);

  useEffect(() => {
    getTaks();
  }, [filterState, getTaks]);

  const [latekStateCout, setLate] = useState([]);
  const getLate = useCallback(async () => {
    const date = await api.get(`/filter/late/11:11:11:11:11:11`);
    setLate(date.data.length);
  }, []);

  useEffect(() => {
    getLate();
  }, [getLate, latekStateCout]);

  const redirectTaks = useCallback(() => {
    navigation.navigate("Task");
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        showNotification={true}
        latekStateCout={latekStateCout}
        ondListLate={() => setFilter("late")}
      />
      <View style={styles.filter}>
        <FilterCard
          name="Todos"
          onFilter={() => setFilter("all")}
          active={filterState === "all" ? true : false}
        />
        <FilterCard
          name="Hoje"
          onFilter={() => setFilter("today")}
          active={filterState === "today" ? true : false}
        />
        <FilterCard
          name="Semana"
          onFilter={() => setFilter("week")}
          active={filterState === "week" ? true : false}
        />
        <FilterCard
          name="Mes"
          onFilter={() => setFilter("month")}
          active={filterState === "month" ? true : false}
        />
        <FilterCard
          name="Ano"
          onFilter={() => setFilter("year")}
          active={filterState === "year" ? true : false}
        />
      </View>
      <CutLine late={filterState === "late" ? true : false} />
      <ScrollView
        style={styles.containerTodoCard}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {taskState.map((e) => (
          <TodoCard
            key={e._id}
            title={e.title}
            done={e.done}
            when={e.when}
            type={e.type}
          />
        ))}
      </ScrollView>

      <Footer showIcon={true} onPressMavigation={redirectTaks} />
    </View>
  );
}
