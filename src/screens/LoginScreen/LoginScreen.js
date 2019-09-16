import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
export default class LoginScreen extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  button: {
    borderRadius: 20,
    height: 44,
    marginBottom: 24,
    margin: 10,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#3771E6"
  }
});
