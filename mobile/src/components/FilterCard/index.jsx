import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function FilterCard({ active, name, onFilter }) {
  return (
    <TouchableOpacity onPress={onFilter}>
      <Text style={active ? styles.active : styles.disabled}>{name}</Text>
    </TouchableOpacity>
  );
}
