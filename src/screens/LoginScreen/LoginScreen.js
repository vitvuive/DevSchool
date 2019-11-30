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

  _Register = () => {
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
            keyboardType={"email-address"}
            onChangeText={username => this.setState({ username: username })}
          />
          <TextInput
            style={styles.login_box}
            placeholder={"password"}
            placeholderTextColor={"white"}
            secureTextEntry={true}
            onChangeText={password => this.setState({ password: password })}
          />
          <TouchableOpacity style={styles.forgot_password_btn}>
            <Text style={{ fontSize: 15, color: "white" }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <StyledButton
            onPress={this._Login}
            title={"Login"}
            textColor={"white"}
            backgroundColor={Colors.accent}
            containerStyle={styles.login_btn}
          />
          <Text style={{ color: "white", fontSize: 15 }}>- or -</Text>
          <StyledButton
            onPress={onPress}
            title={"Login with Facebook"}
            textColor={"white"}
            backgroundColor={Colors.accent}
            containerStyle={styles.login_facebook_btn}
          />
        </View>
        <StyledButton
          onPress={this._Register}
          title={"Create an account"}
          textColor={"white"}
          containerStyle={styles.register_btn}
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
  login_btn: {
    width: 250,
    marginTop: 10
  },
  login_facebook_btn: {
    width: 250,
    marginTop: 5
  },
  login_box: {
    width: "70%",
    fontSize: 20,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white"
  },
  register_btn: {
    shadowOffset: { width: 0, height: 0 },
    elevation: 0,
    shadowRadius: 15,
    shadowOpacity: 0,
    shadowColor: "rgba(0, 0, 0, 0)"
  },
  forgot_password_btn: {
    marginLeft: "35%",
    marginTop: 10
  }
});
