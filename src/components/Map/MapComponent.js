import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userLocation: {
                lat: 45.518,
                lng: -122.680 
            }
        }
        this.setCurrentLocation = this.setCurrentLocation.bind(this);
    }

    componentDidMount() {
        this.setCurrentLocation();
    }

    render() {
        const {lat, lng } = this.state.userLocation; 
        return(
            <Map
                google={this.props.google}
                zoom={8}
                style={ {width: '100%', height: '100%' }}
                center={{ lat, lng }}
            />
        );
    };

    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState(() => ({
                    userLocation: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    }
                }));
            });
        } else {
            console.log('not supported');
        }
    }

}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAP // This is for personal proeject. Do not pass secret key like this in Prod
})(MapComponent);
