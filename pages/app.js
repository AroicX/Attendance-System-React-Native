import React, { Component } from 'react';
import { AppRegistry,View,Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import { StackNavigator,DrawerNavigator  } from 'react-navigation';

import Attendance from './attendance';
import Login from './login';
//import awesome from './awesome';
import attendancetest from './attendancetest';
import requiredddl from './requiredddl';
import attendenceTest2 from './attendenceTest2';
import attendencetest23 from './attendencetest23';
import data_local from "../data/StudentList.json";

const myDrawer = DrawerNavigator({

	Login:{screen:Login},
	attendancetest:{screen:attendancetest},
	requiredddl:{screen:requiredddl},
	attendenceTest2:{screen:attendenceTest2},
	attendencetest23:{screen:attendencetest23}
	//Attendance: { screen: Attendance },
	//awesome:{screen:awesome},
	
},
{
	//contentComponent: props => <Menu {...props} />
});


const AttendanceSystem = StackNavigator({

	//attendenceTest2:{screen:myDrawer},
	//requiredddl:{screen:myDrawer},
	//attendancetest:{screen:myDrawer},
	Login:{screen:myDrawer},
	//attendancetest:{screen:attendancetest},


	

 });
export default AttendanceSystem;