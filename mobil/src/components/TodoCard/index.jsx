import React, { useMemo } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import icons from "../../utils/typeIcons";
import { format } from "date-fns";
import styles from "./styles";

export default function TodoCard({ done, when, title, type }) {
  const date = useMemo(() => format(new Date(when), "dd/MM/yyyy"), [when]);
  const hour = useMemo(() => format(new Date(when), "HH:mm"), [when]);

  return (
    <TouchableOpacity style={[styles.contaier, done && styles.cardDone]}>
      <View style={styles.contaierleft}>
        <Image style={styles.cardImage} source={icons[type]} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>

      <View style={styles.contaierRignt}>
        <Text style={styles.cardDate}>{date}</Text>
        <Text style={styles.cardTime}>{hour}</Text>
      </View>
    </TouchableOpacity>
  );
}
