import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    filter: {
        flexDirection: "row",
        width: "100%",
        height: 70,
        justifyContent: "space-around",
        alignItems: "center",
    },
    containerTodoCard:{
        width: "100%",
        marginTop: 10,    
    }
});

export default styles;