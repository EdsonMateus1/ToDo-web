import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
export default function CutLine({ late }) {
  return (
    <View style={styles.containerLine}>
      <Text style={styles.textLine}>
        {late ? "Tarefas atrasadas" : "Tarefas"}
      </Text>
    </View>
  );
}
