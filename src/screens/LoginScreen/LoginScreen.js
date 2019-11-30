/* eslint-disable no-console */
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from "react-native";
import { API } from "src/services";

import { StyledButton, StyleText } from "../../shared-components";
import { Colors } from "src/theme";
export default class LoginScreen extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        username: "",
        password: ""
      });
  }

  _Login = () => {
    const login = this.props.login;
    const { username, password } = this.state;
    login(username, password);
  };

  _createUser = () => {
    const { username, password } = this.state;
    const register = this.props.register;
    register(username, password);
  };

  render() {
    const { isLoading, onPress } = this.props;
    console.log("viet" + isLoading);
    return (
      <View style={styles.container}>
        <StyleText>{""}</StyleText>
        <Text style={styles.logo}>{"DRINKING"}</Text>
        <View style={styles.login_area}>
          <TextInput
            style={styles.login_box}
            placeholder={"email"}
            placeholderTextColor={"white"}
            inlineImageLeft={"username"}
            keyboardType={"email-address"}
            onChangeText={username => this.setState({ username: username })}
          />
          <TextInput
            style={styles.login_box}
            placeholder={"password"}
            placeholderTextColor={"white"}
            inlineImageLeft={"password"}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password: password })}
          />
          <Text></Text>
          <TouchableOpacity style={styles.login_btn} onPress={this._Login}>
            <Text style={styles.login_label}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.create_user_btn}
            onPress={this._createUser}
          >
            <Text style={styles.create_label}>Create an account</Text>
          </TouchableOpacity>
        </View>
        <StyledButton
          onPress={onPress}
          title={"Login with Facebook"}
          textColor={"white"}
          backgroundColor={Colors.accent}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.primary
  },
  logo: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 40
  },
  login_area: {
    alignItems: "center"
  },
  login_label: {
    fontSize: 30,
    color: "white"
  },
  login_box: {
    width: "65%",
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white"
  },
  login_btn: {}
});
