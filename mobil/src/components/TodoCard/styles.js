import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contaier: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 6,
        marginVertical: 10,
        width: "90%",
        height: 70,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#EE6B26",
    },
    contaierleft: {
        flexDirection: "row",
        alignItems: "center",
    },
    contaierRignt: {
        justifyContent: "space-between",
        height: "100%",
    },
    cardTitle: {
        marginLeft: 10,
        color: "#000",
        fontWeight: "bold",
    },
    cardImage: {
        width: 40,
        height: 40,
    },
    cardDate: {
        color: "#EE6B26",
        
    },
    cardTime: {
        alignSelf: "flex-end",
        color: "#707070",
        
    },
    cardDone:{
        opacity: 0.5,
    }

});
export default styles