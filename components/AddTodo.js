import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AddBtn from "./AddBtn";
function AddTodo({ submit }) {
    const [newItem, setNewItem] = useState();
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter new item..."
                onChangeText={value => setNewItem(value)}
            />
            <AddBtn submit={() => submit(newItem)} />
        </View>
    )
}

export default AddTodo
const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginLeft: 10,
        flex: 1,
        flexDirection: "row",
        // alignItems: "space-evenly"
        justifyContent: "space-evenly"
    },
    input: {
        height: 50,
        width: 250,
        borderWidth: 1,
        paddingLeft: 15,
        fontSize: 18
    },
    text: {
        fontSize: 18
    }
})