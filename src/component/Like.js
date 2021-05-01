import React, { Component } from 'react'
import { StyleSheet, Image, View, } from "react-native";

export class like extends Component {

    constructor(props){
        super(props)
        this.state = {
          foto : require("../image/thumb-up-cartoon-png_246633.jpg")
      }
    }
      render() {
        return (
          <Image source={this.state.foto} style={styles.fotokecil}></Image>
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          paddingTop: 10,
        },
        fotokecil: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 66,
          height: 58,
        },
      });

export default like