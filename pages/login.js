import React, { Component } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ActivityIndicator,
  KeyboardAvoidingView,
  Animated
} from "react-native";

import user_login from "../data/User.json";
import imologo from "../images/Imperial_College.jpg";
import Logo from "./logo";


export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      animating: false
    };
  }
  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: true
        }),
      6000
    );

  static navigationOptions = ({ navigation }) => ({
    title: "Attendance System"
  });
  render() {
    const animating = this.state.animating;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo/>
        <ScrollView style={{ padding: 80 }}>
        
          <Text style={{ fontSize: 27 }}>Login</Text>
          <TextInput
            style={styles.textdesign}
            placeholder="Username"
            onChangeText={username => this.setState({ username })}
          />
          <TextInput
            style={styles.textdesign}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
          <View style={{ margin: 7 }} />
          <Button
            // onPress={this.props.onLoginPress}
            //onPress={()=>navigate('attendancetest')}
            onPress={this.login}
            title="Login"
          />

          <ActivityIndicator
            animating={animating}
            color="#bc2b78"
            size="large"
            style={styles.activityIndicator}
          />
          </ScrollView>
        
      </View>
    );
  }
  login = () => {
    /* */
    //alert(this.state.username);
   /* fetch("http://192.168.1.135:4000/Account/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rollNumber: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          this.props.navigation.navigate("requiredddl");
        } else {
          alert(res.message);
        }
      })
      .catch(error => {
        console.error(error);
      });*/
      if(this.state.username=='rifat' && this.state.password=='rifat'){
        this.props.navigation.navigate("requiredddl");
      }
      else{
        alert('Username and Password is wrong');
      }
      loading = () => {
        this.setState({ animating: true });
        setTimeout(() => {
          this.setState({ animating: false });
        }, 5000);
      };
  };
  
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    
    backgroundColor: "#F8F9F9"
  },
  textdesign: {
    padding: 10
  }
});
