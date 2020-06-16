import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";


// ICONES
import logoTodo from "../../assets/logo.png";
import logoBell from "../../assets/bell.png";
import logoQRcode from "../../assets/qrcode.png";
import logoArrow from "../../assets/back.png";

export default function Home({ showNotification,latekStateCout,ondListLate,onPressNavigation }) {
  return (
    <View style={styles.header}>
      <Image style={styles.imageLogo} source={logoTodo} />
      {showNotification ? (
        <>
          <TouchableOpacity style={styles.QRcode}>
            <Image source={logoQRcode} style={styles.logoQRcode} />
          </TouchableOpacity>

          <TouchableOpacity onPress={ondListLate} style={styles.notication}>
            <Image source={logoBell} style={styles.noticationImage} />
            <View style={styles.noticationCircle}>
              <Text style={styles.notificationText}>{latekStateCout}</Text>
            </View>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.arrowArea} onPress={onPressNavigation}>
          <Image source={logoArrow} style={styles.logoArrow} />
        </TouchableOpacity>
      )}
    </View>
  );
}
