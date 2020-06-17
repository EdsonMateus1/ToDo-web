import React, { useState, useCallback, createContext } from "react";
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
} from "react-native";

import { withFormik } from "formik";

import styles from "./styles";
import icons from "../../utils/typeIcons";
//COMPONENTES
import Header from "../../components/Header";
import Form from "./Form";

export default function Taks({ navigation }) {
  const redirectHome = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header onPressNavigation={redirectHome} />
      <Form navigation={navigation} />
    </KeyboardAvoidingView>
  );
}
