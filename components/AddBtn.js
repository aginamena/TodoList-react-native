import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AddBtn({ submit }) {
    return (
        <View style={styles.btnCon}>
            <TouchableOpacity style={styles.button} onPress={() => submit()}>
                <Text style={styles.btnText}>+</Text>
            </ TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btnCon: {
        height: 50,
    },
    button: {
        color: "blue",
        height: 50,
        width: 50,
        backgroundColor: "#1f456e",
        borderRadius: 50,
        flex: 1,
        // by default react native flex is column and not row
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
})