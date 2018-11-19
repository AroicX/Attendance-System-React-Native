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
//import { Router, Stack, Scene } from 'react-native-router-flux'
import requiredddl from "./requiredddl";
import data_local from "../data/StudentList.json";
import Logo from "./logo";
import imologo from "../images/Imperial_College.jpg";
import { Fonts } from "./font";
//import test_data from "../data/attend_test.json";
var radio_props = [{ label: "P", value: 1 }, { label: "A", value: 0 }];
//this.setState({ myArray: [...this.state.myArray, ...[1,2,3] ] })

//var data_local = require("../data/StudentList.json");

export default class attendancetest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      rollno:"",
      typeofattendance:1,
      //radio_props: radio_props.value,
      animating: true
      //test_data:test_data,
    };
  }
  componentWillMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await fetch("http://192.168.1.208:8082/students/all");
    const json = await response.json();
    this.setState({ data: json });
  };
  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false
        }),
      4000
    );

  componentDidMount = () => this.closeActivityIndicator();
  render() {
    const animating = this.state.animating;
    const { data_local, isLoading } = this.state;
    /* const App = () => (
      <Router
        navigationBarStyle={{ backgroundColor: '#669966' }}
        titleStyle={{
          fontFamily: 'Pacifico-Regular',
          fontSize: 22,
          color: '#003300',
        }}
        navBarButtonColor={{ color: '#003300' }}
      >
        <Stack key="root">
          <Scene init key="events" component={Events} title="Event Expert" />
          <Scene key="requiredddl" component={requiredddl} title="All Item" />
        </Stack>
      </Router>
    )*/
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          flexWrap: "wrap",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          backgroundColor: "#F8F9F9"
        }}
      >
      <View style={{
        height:40,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        

        
        <Text style={{  fontSize: 20,
                        textAlign: "left",
                        width:190,
                        fontWeight: "bold"
                        }}>Daily Attendance </Text>
                        <Logo />
        <Text style={{fontSize: 20,
                        textAlign: "right",
                        width:225,
                        fontWeight: "bold"}}>Section A Class 11th </Text>
                             
                             </View>
         <View style={{height:20}}>                 
        <ActivityIndicator
          animating={animating}
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
        </View>   
        

        <View style={styles.container}>

          <Text style={styles.titleText}>Roll & Name</Text>
          <Text style={styles.titleText22}>Present Or Absent</Text>
        </View>
        <FlatList
        
          data={this.state.data}
         // rollno={this.state.data.rollno}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                height: 50,

                backgroundColor: "#D1F2EB",
                borderRadius: 4,
                borderWidth: 1,
                borderColor: "#008000",
                marginLeft: "1%"
              }}
            >
              <Text
                style={{
                  flex: 2,
                  fontSize: 15,
                  width: 150
                }}
              >
                {item.rollno}
                --
                {item.name}

              {/*   onChangeText={(rollno) => this.setState({rollno: rollno})} */}
                {/*  this.setState({ item.rollno }); */}
              </Text>

              <RadioForm
                animation={true}
                buttonColor={"#C2E3A9"}
                index={1}
                formHorizontal={true}
                labelHorizontal={true}
                buttonStyle={{ marginRight: 20 }}
                radioStyle={{ paddingRight: 20 }}
                //  labelHorizontal={false}
                style={{
                  flex: 1,
                  paddingRight: 10,
                  flexDirection: "row",
                  //padding: 10,
                  width: 30
                }}
                radio_props={radio_props}
                initial={this.state.typeofattendance[1]}
                
               // initial={value => {
                 // this.setState({ value: value });}}
                isSelected = {true}
               // radio_props
                
                onPress={value => {
                  this.setState({ typeofattendance: value });
                }}
                ItemSeparatorComponent={this.renderSeparator}
              />
              
                
            </View>
            
          )}
          // keyExtractor={(x, i) => i}

          keyExtractor={(item, index) => index.toString()}
         
        />
         <Button title="Submit" onPress={() => this.insert()} />
      </View>
    );
  }

  
  insert = () => {
    var numstudent = this.state.data.length;
    var datatest=[]
    var data1;
    for(var i=0;i<numstudent;i++){
       data1={"rollno": this.state.data[i].rollno, "typeofattendence": this.state.typeofattendance};
       datatest.push(data1);
      }
   //   console.log(datatest);

    fetch("http://192.168.1.208:8082/Attendence/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(datatest)
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          alert('data is inserted')
         // alert(res.message);
        } else {
          alert(res.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
      
      
  };
  insert1 = (item) => {
    /* */
    //alert(this.state.username);
    fetch("http://192.168.1.139:8082/Attendence/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{
        
        rollno: item.rollno,
        typeofattendence: this.state.value
      }])
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          alert(res.message);
        } else {
          alert(res.message);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
}
const styles = StyleSheet.create({
  container: {
    //flex:1,
    flexDirection: 'row',
    backgroundColor: "#A9CCE3",
    marginTop: 20,
    justifyContent: 'space-between'
    
  },
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
    textAlign: "left",
    width:150
  },
 
  titleText22: {
    
    fontSize: 20,
    textAlign: "right"
  },

  titleText1: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold"
    //fontFamily: Fonts.Roboto
  },
  titleLeft: {
    fontSize: 20,
    textAlign: "right"
  }
});
