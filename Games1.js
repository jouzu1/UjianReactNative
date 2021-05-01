import React, { Component } from 'react'
import { Text, View, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import Like from './src/component/Like';
import Dislike from './src/component/Dislike'
export class Games1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fotoAtas: require('./src/image/thumb-up-cartoon-png_246633.jpg'),
            fotoBawah: require('./src/image/png-transparent-thumbs-down-art-thumb-signal-emoji-symbol-give-a-thumbs-up-hand-smiley-arm.png')
        }
    }

    onButtonPress = () => {
        this.setState({
            fotoAtas: require('./src/image/png-transparent-thumbs-down-art-thumb-signal-emoji-symbol-give-a-thumbs-up-hand-smiley-arm.png')
        });
    }

    // onButtonPressReal = () => {
    //     const test = [];
    //     for (let i = 0; i < 50; i++) {
    //         test.push(<TouchableOpacity onPress={this.onButtonPress}>
    //             <Image source={this.state.foto} style={style.image}></Image>
    //         </TouchableOpacity>);
    //         // console.log(test)
    //     }
    // }




    // onButtonPressAgain = () => {
    //     // const test = [];
    //     for (let i = 0; i < 50; i++) {
    //         this.test.push(<TouchableOpacity onPress={this.setState({ foto: require('./src/image/thumb-up-cartoon-png_246633.jpg') })}></TouchableOpacity>);
    //         // console.log(test)
    //     }
    // }





    render() {
        // const test = [];
        // for (let i = 0; i < 50; i++) {
        //             test.push(<TouchableOpacity onPress={this.onButtonPress}>
        //                 <Image source={this.state.foto} style={style.image}></Image>
        //             </TouchableOpacity>);
        // }
        // if (test.indexOf(0) === 0 && test.indexOf(8) === 8) {
        //   }
        // const panjang = 10
        // const lebar = 10
        let count = 0
        let x = 0
        let y = 0
        this.test = []
        for (x = 1; x <= 5; x++) {
            for (y = 1; y <= 10; y++) {
                count++;
                let countTemp = 0;
                // for (let z = 1; z <= count; z++) {
                //     if (count % z == 0) {
                //         countTemp++;
                //     }
                // }
                if (count == 1 || count == 2 || count == 3 || count == 5 || count == 8 || count == 13 || count == 21 || count == 34) {
                    this.test.push(<TouchableOpacity onPress={() => {this.setState({fotoAtas: require('./src/image/png-transparent-thumbs-down-art-thumb-signal-emoji-symbol-give-a-thumbs-up-hand-smiley-arm.png')})}}>
                                        <Dislike foto={this.state.fotoAtas} />
                                    </TouchableOpacity>);
                } else {
                    this.test.push(<TouchableOpacity onPress={
                        () => {
                            this.setState({ fotoAtas: require('./src/image/thumb-up-cartoon-png_246633.jpg') })
                        }
                    }>
                        <Like />
                    </TouchableOpacity>);
                }
            }
        }
        return (
            <ScrollView>
                <Text>
                    {this.test}
                </Text>
                {/* <Button title="Reset" onPress={() => { this.test = [] }} /> */}
                <Button title="Lanjut Ke Games 2" onPress={() => { this.props.navigation.navigate("Games2") }} />
            </ScrollView>
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
