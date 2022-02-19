import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function TodoItem({ todo, deleteItem }) {
    return (
        <View style={styles.todoItem}>
            <TouchableOpacity onPress={() => deleteItem(todo.key)}>
                <Text style={{ fontSize: 18 }}>{todo.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TodoItem

const styles = StyleSheet.create({
    todoItem: {
        borderWidth: 1,
        padding: 20,
        borderColor: "black"
        // border:1 solid black
    }
})