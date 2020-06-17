import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    mainFormContainer: {
        paddingHorizontal: 20,
    },
    imageContainer: {
        marginVertical: 10,

        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    image: {
        width: 35,
        height: 35,
        marginHorizontal: 2,
        borderRadius: 50,
    },
    inputTitle: {
        color: "#707070",
        fontSize: 20,
        marginBottom: 0,

    },

    input: {
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#EE6B26"

    },
    textareaDescription: {
        color: "#707070",
        fontSize: 20,
        paddingVertical: 10,

    },
    textarea: {
        height: 100,
        borderWidth: 1,
        borderColor: "#EE6B26",
        borderRadius: 10,
    },
    containerCheckDelete: {
        justifyContent: "center",
        alignContent: "space-between",
        width: "100%",
    },
    containerCheck: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    checkboxTitle: {
        color: "#EE6B26",
        fontSize: 20,
        fontWeight: "bold",
    },
    bottonExcluir: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#20295F",
    },
   inative:{
        opacity: 0.5,
   }

});

export default styles