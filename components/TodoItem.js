import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function TodoItem({ todo, deleteItem }) {
    return (
        <View style={styles.todoItem}>
            <TouchableOpacity style={styles.box}>
                <Text style={{ fontSize: 18 }}>{todo.title}</Text>
                <MaterialIcons name="delete" size={24} color="black" onPress={() => deleteItem(todo.key)} />
            </TouchableOpacity>
        </View>
    )
}
export default TodoItem

const styles = StyleSheet.create({
    todoItem: {
        borderWidth: 1,
        padding: 20,
        borderColor: "black",
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30
    },
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
    }

})