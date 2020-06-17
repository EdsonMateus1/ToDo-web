import React, { useState, useCallback } from "react";
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";

import { withFormik } from "formik";

import styles from "./styles";
import icons from "../../utils/typeIcons";
import DateTimeInput from "../../components/DateTimeInput/index.android";
import Footer from "../../components/Footer";

import api from "../../services/api";

const Form = (props) => {
  return (
    <>
      <ScrollView>

        <KeyboardAvoidingView
          behavior="padding"
          style={styles.mainFormContainer}
        >
          <ScrollView style={{ width: "100%" }}>
            <View style={styles.imageContainer}>
              {icons.map(
                (icon, index) =>
                  index > 0 && (
                    <TouchableOpacity
                      key={index}
                      onPress={() => props.setFieldValue("type", index)}
                    >
                      <Image
                        style={[
                          styles.image,
                          props.values.type &&
                            props.values.type !== index &&
                            styles.inative,
                        ]}
                        source={icon}
                      />
                    </TouchableOpacity>
                  )
              )}
            </View>
          </ScrollView>

          <Text style={styles.inputTitle}>Titulo</Text>
          <TextInput
            value={props.values.title}
            onChangeText={(text) => props.setFieldValue("title", text)}
            nativeID="title"
            style={styles.input}
            maxLength={30}
          />

          <Text style={styles.textareaDescription}>Descricao</Text>

          <TextInput
            value={props.values.description}
            onChangeText={(text) => props.setFieldValue("description", text)}
            style={styles.textarea}
            multiline={true}
            maxLength={200}
          />

          <DateTimeInput
            type="date"
            value={props.values.date}
            save={(date) => props.setFieldValue("date", date)}
          />

          <DateTimeInput
            type="time"
            value={props.values.time}
            save={(time) => props.setFieldValue("time", time)}
          />

          <View style={styles.containerCheck}>
            <View style={styles.containerCheck}>
              <Switch
                value={props.values.done}
                onValueChange={(check) => props.setFieldValue("done", check)}
                thumbColor={props.values.done ? "#00761b" : "#ee6b26"}
              />
              <Text style={styles.checkboxTitle}>Concluido</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.bottonExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

      </ScrollView>

      <Footer onPressRegister={props.handleSubmit} />
    </>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    title: "",
    description: "",
    done: false,
    date: "",
    time: "",
    type: 0,
  }),
  handleSubmit: async (values) => {
    const data = {
      done: values.done,
      macaddress: "11:11:11:11:11:11",
      type: values.type,
      title: values.title,
      description: values.description,
      when: `${values.date}T${values.time}:00.000`,
    };
    try {
      await api.post("/",data);
      Alert.alert("cadastro realizado com sucesso");
    } catch (error) {
      console.warn(error);
    }
     
  },
})(Form);
