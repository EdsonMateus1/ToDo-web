import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    filter: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },
    active: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#ee6b26",
    },
    disabled: {
        color: "#20295f",
        fontWeight: "bold",
        fontSize: 18,
        opacity: 0.5,
    }
});

export default styles;