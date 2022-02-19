import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
function Form() {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Add new todo item here' style={styles.textInput} />
            <TouchableOpacity style={styles.button}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        // flex: 1,
        // alignItems: "center",

    },
    header: {
        color: "#d6542c",
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 20
    },
    textInput: {
        width: 300,
        height: 50,
        borderWidth: 2,
        paddingLeft: 10
    },
    button: {
        backgroundColor: "#eda28a",
        width: 70,
        borderRadius: 50,
        flex: 1,
        // flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginLeft: 110
    }
})

export default Form