import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class MapScreen extends Component {
    state = { 
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09,
        }
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    componentDidMount () {
        this.setState({ mapLoaded: true })
    }
    
    onButtonPress() {
        console.log("searching area")
        this.props.fetchJobs(this.state.region);
    }

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }} >
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <MapView  
                    style={{ flex: 1 }}
                    region={this.state.region} 
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        large 
                        title="Search this area" 
                        backgroundColor="#009688" 
                        icon={{ name: 'search' }} 
                        onPress={this.onButtonPress.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
    }
}

export default connect(null, actions)(MapScreen);