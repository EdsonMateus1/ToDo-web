import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    header:{
        width: "100%",
        height: 70,
        backgroundColor: "#20295F",
        borderBottomWidth: 5,
        borderBottomColor: "#EE6B26",
        alignItems: "center",
        justifyContent: "center",
    },
    imageLogo:{
        width: 100,
        height: 30
    },
    notication:{
        position: "absolute",
        right: 20,
    },
    noticationImage:{
        width: 30,
        height: 35,
    },
    noticationCircle:{
        width: 25,
        height: 25,
        backgroundColor: "#fff",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position : "absolute",
        left: 13,
        bottom: 13,
    },
    notificationText:{
        color: "#EE6B26",
    },
    QRcode:{
        position: "absolute",
        left: 8,
    },
    logoQRcode:{
        width: 30,
        height: 30,
    },
    logoArrow:{
        width: 20,
        height: 20,
        margin: 10,
    },
    arrowArea:{
        position: "absolute",
        left: 8,
    }
});

export default styles