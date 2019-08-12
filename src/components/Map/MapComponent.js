import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            center: {
                lat: null,
                lng: null 
            },
            zoom: 14
        }
        this.setCurrentLocation = this.setCurrentLocation.bind(this);
    }

    componentDidMount() {
        this.setCurrentLocation();
    }

    render() {
        return(
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    };

    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    },
                    zoom: 14
                });
            });
        } else {
            console.log('not supported');
        }
    }
}

export default MapComponent;