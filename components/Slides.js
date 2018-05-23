import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
    state = {  }

    renderSlides() {
        return this.props.data.map((slide, i) => {
            return (
                <View style={[styles.slideStyle, { backgroundColor: slide.color }]} 
                      key={i}
                >
                    <Text style={styles.textStyle}>{slide.text}</Text>
                    { this.renderButton(i) }
                </View>
            )
        })
    }

    renderButton(index) {
        if (index === this.props.data.length - 1) {
            return <Button title="Onwards!" 
                           raised 
                           containerViewStyle={styles.buttonContainerStyle}
                           buttonStyle={styles.buttonStyle}
                           onPress={() => this.props.onComplete()}/>
        }
    }

    render() {
        return (
            <ScrollView horizontal
                        style={{ flex: 1 }}
                        pagingEnabled >
                { this.renderSlides() }
            </ScrollView>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    },
    slideStyle: {
        flex: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainerStyle: {
        marginTop: 15,
    },
    buttonStyle: {
        backgroundColor: '#0288D1',        
    }
    
}

export default Slides;