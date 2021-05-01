import React, { Component } from 'react'
import { StyleSheet, Image, View, } from "react-native";

export class Dislike extends Component {

  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Image source={this.props.foto} style={styles.fotokecil}></Image>
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

export default Dislike