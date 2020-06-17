import React, { useState, useCallback } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  DatePickerAndroid,
  TimePickerAndroid,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

import { format } from "date-fns";

import iconCalendar from "../../assets/calendar.png";
import iconTime from "../../assets/clock.png";

export default function DateTimeInputandroid({ type, save, value }) {
  const [dateTimeState, setDateTime] = useState();

  const handleselectDataHour = useCallback(async () => {
    if (type === "date") {
      const { action, year, month, day } = await DatePickerAndroid.open({
        mode: "calendar",
      });

      if (action === DatePickerAndroid.dateSetAction) {
        setDateTime(`${day}-${month}-${year}`);

        save(format(new Date(year, month, day), "yyyy-MM-dd"));
      }
    } else {
      const { action, hour, minute} = await TimePickerAndroid.open({
        is24Hour: true,
      });

      if (action !== TimePickerAndroid.dismissedAction) {
        setDateTime(`${hour}:${minute}`);
        save(format(new Date(2020, 12, 1, hour, minute), "HH:mm"));
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
