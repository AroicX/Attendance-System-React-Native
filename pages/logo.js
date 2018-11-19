import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

import imologo from "../images/Imperial_College.jpg";
//import logoImg from '../images/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={imologo} style={styles.image} />
            
      </View>
    );
  }
}


const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    width: 50,
    height: 80,
    resizeMode: "cover",
    position: "absolute",
    //paddingLeft: 10,
    alignSelf: "center"
  },
});
