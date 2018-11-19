import React, { Component } from "react";

import {
  View,
  AppRegistry,
  StyleSheet,
  Image,
  List,

  // ListView,
  FlatList,
  Text,
  Alert,
  ActivityIndicator,
  Platform,
  ul,
  li,
  Button
} from "react-native";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import { Div } from 'react-native-div' ;
import data_local from "../data/StudentList.json";
import imologo from "../images/Imperial_College.jpg";
//import test_data from "../data/attend_test.json";
var radio_props = [{ label: "P", value: "P" }, { label: "A", value: "A" }];
//this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] })

//var data_local = require("../data/StudentList.json");

export default class awesome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data_local: data_local,
      radio_props: radio_props,
      animating: true
      //test_data:test_data,
    };
  }
  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      3000
    );

  prepareJson() {
    var json = {};
    //json.image = this.state.image;
    var absent = [];
    var present = [];
    this.state.data_local.map(data_local => {
      if (radio_props.Status == "P") present.push(data_local);
      else absent.push(data_local);
    });
    json.absent = absent;
    json.present = present;
    return json;
    alert(radio_props);
  }
  prepareJson2() {
    fetch(data_local, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: "blablabla", id_product: "12" })
    })
      .then(response => JSON.stringify(response.json()))
      .then(responseData => {
        console.log("response: " + responseData);
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount = () => this.closeActivityIndicator();
  render() {
    const animating = this.state.animating;
    const { data_local, isLoading } = this.state;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          flexWrap: "wrap",
          borderTopWidth: 5,
          borderBottomWidth: 5
        }}
      >
        <ActivityIndicator
          animating={animating}
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
        
        <View style={{ backgroundColor: "#FF4500",}}>
        <Text style={styles.titleText}>Daily Attendance</Text>
        <Text style={styles.titleLeft}>Section A</Text>
        </View>

        <FlatList
          data={this.state.data_local}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
          
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                height: 50,
                width: "100%",
                backgroundColor: "#FFFF00",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#008000",
                marginLeft: "5%"
              }}
            
            
              <Text style={{ fontSize: 19,"justifyContent": "space-between" }}>
                {item.Roll}-  {item.name} 
                 
              </Text>

              <RadioForm
                style={{ flex: 1, flexDirection: "row", padding: 10 }}
                radio_props={radio_props}
                initial={0}
                onPress={value => {
                  this.setState({ value: value });
                }}
                ItemSeparatorComponent={this.renderSeparator}
              />
           
          )}
          keyExtractor={(item, index) => index.toString()}
        />

        <Button title="Submit" onPress={() => this.prepareJson()} />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    position: "absolute",
    alignSelf: "center"
  },
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    textAlign:"left"
  },
  titleLeft:{
    fontSize:20,
    textAlign: 'right'
  }
});
 