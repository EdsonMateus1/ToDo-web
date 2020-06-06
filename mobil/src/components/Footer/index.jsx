import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
// icones
import logoADD from "../../assets/add.png";
import logoSave from "../../assets/save.png";

export default function Footer({ showIcon,onPressMavigation }) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.logo} onPress={onPressMavigation}>
        {showIcon ? (
          <Image source={logoADD} />
        ) : (
          <Image source={logoSave} />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>Organizando sua vida</Text>
    </View>
  );
}
