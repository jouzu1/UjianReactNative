import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from 'react-native'

export class Games1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foto: require('./src/image/thumb-up-cartoon-png_246633.jpg')
        }
    }


    onButtonPress = () => {
        this.setState({
          foto: require('./src/image/248068_thumbs-down-youtube-thumbs-up-png-transparent-png.png')
        });
      }

    render() {
        const test = [];



        for (let i = 0; i < 50; i++) {
                    test.push(<TouchableOpacity onPress={this.onButtonPress}>
                        <Image source={this.state.foto} style={style.image}></Image>
                    </TouchableOpacity>);
        }


        return (
            <View>
                <Text>
                    {test}
                </Text>
                {/* <Text> textInComponent </Text>   */}
                {/* <TouchableOpacity>
                    <Image source={this.state.foto} style={style.image}></Image>
                </TouchableOpacity> */}
                {/* <TouchableOpacity >
                    <Image source={require('./src/image/thumb-up-cartoon-png_246633.jpg')} style={style.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('./src/image/thumb-up-cartoon-png_246633.jpg')} style={style.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('./src/image/thumb-up-cartoon-png_246633.jpg')} style={style.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity >
                    <Image source={require('./src/image/thumb-up-cartoon-png_246633.jpg')} style={style.image}></Image>
                </TouchableOpacity> */}
                <Button title="Lanjut Ke Games 2" onPress={() => { this.props.navigation.navigate("Games2") }} />
            </View>
        )
    }
}

export default Games1

const style = StyleSheet.create({
    image: {
        height: 50,
        width: 50,
        // flexDirection:'row', 
        // flex:1
    }
})
