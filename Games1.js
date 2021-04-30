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
          foto: require('./src/image/png-transparent-thumbs-down-art-thumb-signal-emoji-symbol-give-a-thumbs-up-hand-smiley-arm.png')
        });
      }

      
    onButtonPressAgain = () => {
        const test = [];
        for (let i = 0; i < 50; i++) {
            test.push(<TouchableOpacity onPress={this.setState({foto:require('./src/image/thumb-up-cartoon-png_246633.jpg')})}>
            </TouchableOpacity>);
            console.log(test)
}
        // this.setState({
        //   foto: require('./src/image/thumb-up-cartoon-png_246633.jpg')
        // });
      }



    render() {
        const test = [];
        for (let i = 0; i < 50; i++) {
                    test.push(<TouchableOpacity onPress={this.onButtonPress}>
                        <Image source={this.state.foto} style={style.image}></Image>
                    </TouchableOpacity>);
                    console.log(test)
        }


        return (
            <View>
                <Text>
                    {test}
                    {/* {biarBanyak()} */}
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
                 <Button title="Reset" onPress={() => { this.onButtonPressAgain() }} />
                <Button title="Lanjut Ke Games 2" onPress={() => { this.props.navigation.navigate("Games2") }} />
            </View>
        )
    }
}

export default Games1

const style = StyleSheet.create({
    image: {
        height: 50,
        width:50,
        // flexDirection:'row', 
        // flex:1
    }
})
