import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ListView,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { Button } from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import Logo from "./logo";
var { height, width } = Dimensions.get("window");

const instructions = Platform.select({});
var data_local = require("../data/StudentList.json");
//var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

//var data_local=require('./All_Data_Student/AllStudentList.json');
var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

type Props = {};

export default class requiredddl extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: "Attendance System"
  });
  render() {
    let data_group = [
      {
        value: "Science"
      },
      {
        value: "Arts"
      },
      {
        value: "Commerce"
      }
    ];
    let data_year = [
      {
        value: "1st"
      },
      {
        value: "2nd"
      }
    ];
    let data_Session = [
      {
        value: "2016-2017"
      },
      {
        value: "2017-2018"
      }
    ];
    let data_class = [
      {
        value: "11th"
      },
      {
        value: "12th"
      }
    ];
    let data_subject = [
      {
        value: "Bangla"
      },
      {
        value: "English"
      },
      {
        value: "Physics"
      }
    ];
    const state = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo />
        <ScrollView style={{ marginTop: 75 }}>
          <Dropdown label="Group" data={data_group} />
          <Dropdown label="Year" data={data_year} />
          <Dropdown label="Session" data={data_Session} />
          <Dropdown label="Class" data={data_class} />
          <Dropdown label="Subject" data={data_subject} />

          <TouchableOpacity
            style={styles.button}
            underlayColor="green"
            onPress={() => {
              this.props.navigation.navigate("attendencetest23");
            }}
          >
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 50, paddingTop: 20, backgroundColor: "#f1f8ff" },
  tablestyle: { backgroundColor: "green", color: "yellow" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  wrapper: { flexDirection: "row" },
  title: { flex: 1, backgroundColor: "#f6f8fa" },
  row: { height: 28 },
  text: { textAlign: "center" },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 40,
    backgroundColor: "blue",
    borderColor: "#808000",
    marginLeft: 10,
    width: 80,
    alignSelf: "stretch",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
});
