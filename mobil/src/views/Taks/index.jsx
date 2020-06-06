import React, { useState } from "react";
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
import styles from "./styles";
import icons from "../../utils/typeIcons";
//COMPONENTES
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DateTimeInput from "../../components/DateTimeInput/index.android";

export default function Taks() {
  const [doneState, setDone] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <Header />
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
                    <TouchableOpacity key={index}>
                      <Image style={styles.image} source={icon} />
                    </TouchableOpacity>
                  )
              )}
            </View>
          </ScrollView>

          <Text style={styles.inputTitle}>Titulo</Text>
          <TextInput style={styles.input} maxLength={30} />
          <Text style={styles.textareaDescription}>Descricao</Text>
          <TextInput style={styles.textarea} multiline={true} maxLength={200} />
          <DateTimeInput type="date" />
          <DateTimeInput type="time" />
          <View style={styles.containerCheck}>
            <View style={styles.containerCheck}>
              <Switch
                value={doneState}
                onValueChange={() => setDone(!doneState)}
                thumbColor={doneState ? "#00761b" : "#ee6b26"}
              />
              <Text style={styles.checkboxTitle}>Concluido</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.bottonExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Footer />
    </KeyboardAvoidingView>
  );
}
