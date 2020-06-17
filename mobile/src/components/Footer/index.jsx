import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
// icones
import logoADD from "../../assets/add.png";
import logoSave from "../../assets/save.png";

export default function Footer({ showIcon, onPressNavigation ,onPressRegister}) {
  return (
    <View style={styles.footer}>
      {showIcon ? (
        <TouchableOpacity style={styles.logo} onPress={onPressNavigation}>
          <Image source={logoADD} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.logo} onPress={onPressRegister}>
          <Image source={logoSave} />
        </TouchableOpacity>
      )}
      <Text style={styles.text}>Organizando sua vida</Text>
    </View>
  );
}
