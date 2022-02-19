import React, { useState } from "react";
import { StyleSheet, Text, View, Alert, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
// import Navigation from "./routes/homeStack";

export default function App() {
  const [data, setData] = useState([
    { title: "Water the plants", key: 1 },
    { title: "Feed the dogs", key: 2 },
    { title: "Spend 1 hour playing guitar", key: 3 }
  ])
  const newData = [1, 2, 3];
  console.log(typeof newData)
  function addNewTodo() {
    console.log("is clicked")
  }
  function deleteTodo(todoId) {
    setData(data.filter(todoItem => todoItem.key != todoId));
  }
  function addNewTodo(name) {
    if (name.length <= 3) {
      Alert.alert("ooops", "Todos mush have 4 chars minimum", [{ text: "close", onPress: () => console.log("closed") }])
      return;
    }
    const todo = {
      title: name,
      key: data.length + 1
    }
    setData([...data, todo]);
    // closing the keyboard
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container} nativeID="app">
        <Text style={styles.header}>All Tasks</Text>
        <AddTodo submit={name => addNewTodo(name)} />
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) =>
              <TodoItem
                todo={item}
                deleteItem={id => deleteTodo(id)}
              />}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 550,
    position: "relative"
  },
  header: {
    backgroundColor: "#151e3d",
    height: 40,
    color: "white",
    fontSize: 18,
    paddingTop: 5,
    letterSpacing: 1.5
  },
});
