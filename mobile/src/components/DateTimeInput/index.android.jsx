import React, { useState, useCallback } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,
} from "react-native";
import styles from "./styles";

import iconCalendar from "../../assets/calendar.png";
import iconTime from "../../assets/clock.png";

export default function DateTimeInputandroid({ type }) {
  const [dateTimeState, setDateTime] = useState();

  const handleselectDataHour = useCallback(async () => {
    if (type === "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });
      if (action === DatePickerAndroid.dateSetAction) {
        setDateTime(`${day}-${month}-${year}`);
      }
    } else {
      const { action, hour, minute } = await TimePickerAndroid.open({
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        setDateTime(`${hour}:${minute}`);
      }
    }
  }, [type]);

  return (
    <TouchableOpacity onPress={handleselectDataHour}>
      <TextInput
        style={styles.input}
        placeholder={type === "date" ? "selecione a data " : "selecione a hora"}
        value={dateTimeState}
      />
      <Image
        style={styles.iconTextInput}
        source={type === "date" ? iconCalendar : iconTime}
      />
    </TouchableOpacity>
  );
}
