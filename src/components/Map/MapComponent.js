import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MarkerClusterer from '@google/markerclusterer';

class MapComponent extends Component {
    mapObject;
    mapsObject;

    constructor(props) {
        super(props);
        this.state = { 
            center: {
                lat: null,
                lng: null 
            },
            zoom: 14,
            marker: null
        }

        this.setCurrentLocation = this.setCurrentLocation.bind(this);
        this.onClick = this.onClick.bind(this);
        this.toggleMarker = this.toggleMarker.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.removeMarker = this.removeMarker.bind(this);
    }

    componentDidMount() {
        this.setCurrentLocation();
    }

    async handleApiLoaded(map, maps) {
        this.mapObject = map;
        this.mapsObject = maps;
        const google = window.google;

        // const communityLists = await getCommunityList(currentPosition, distance);

        var communityLists = [
            { lat: -31.563910, lng: 147.154312 },
            { lat: -33.718234, lng: 150.363181 },
            { lat: -33.727111, lng: 150.371124 },
            { lat: -33.848588, lng: 151.209834 },
            { lat: -33.851702, lng: 151.216968 },
            { lat: -34.671264, lng: 150.863657 },
            { lat: -35.304724, lng: 148.662905 },
            { lat: -36.817685, lng: 175.699196 },
            { lat: -36.828611, lng: 175.790222 },
            { lat: -37.750000, lng: 145.116667 },
            { lat: -37.759859, lng: 145.128708 },
            { lat: -37.765015, lng: 145.133858 },
            { lat: -37.770104, lng: 145.143299 },
            { lat: -37.773700, lng: 145.145187 },
            { lat: -37.774785, lng: 145.137978 },
            { lat: -37.819616, lng: 144.968119 },
            { lat: -38.330766, lng: 144.695692 },
            { lat: -39.927193, lng: 175.053218 },
            { lat: -41.330162, lng: 174.865694 },
            { lat: -42.734358, lng: 147.439506 },
            { lat: -42.734358, lng: 147.501315 },
            { lat: -42.735258, lng: 147.438000 },
            { lat: -43.999792, lng: 170.463352 }
        ];
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var markers = communityLists.map(function (location, i) {            
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length],
                draggable: true,
                title: "hello"
            });
        });
        var markerCluster = new MarkerClusterer(map, markers,
            { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        
        
        // const circle = new google.maps.Circle({
        //     strokeColor: "#FF0000",
        //     strokeOpacity: 0.8,
        //     strokeWeight: 2,
        //     fillColor: "#FF0000",
        //     fillOpacity: 0.3,
        //     map,
        //     center: this.state.center,
        //     radius: 100
        // });
    };

    render() {
        return(
            <div style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
                    center={this.state.center}
                    zoom={this.state.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps}) => this.handleApiLoaded(map, maps)}
                    onClick={this.onClick}
                >
                </GoogleMapReact>
            </div>
        );
    };

    onClick({ x, y, lat, lng }) {
        if (this.mapObject.getZoom() >= 16) {
            this.toggleMarker(lat, lng);
        } else {
            if (this.state.marker) {
                this.removeMarker();
            }
        }
    }

    toggleMarker(lat, lng) {
        if (this.state.marker) {
            this.removeMarker();
        } else {
            this.addMarker(lat, lng);
        }
    }

    addMarker(lat, lng) {
        const marker = new window.google.maps.Marker({
            position: { lat, lng },
            title: "hello world"
        });

        this.setState({ marker }, () => {
            this.state.marker.setMap(this.mapObject);
        });
    }

    removeMarker() {
        this.state.marker.setMap(null);
        this.setState({ marker: null });
    }

    setCurrentLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    center: {
                        // lat: position.coords.latitude,
                        // lng: position.coords.longitude,
                        lat: -28.024,
                        lng: 140.887
                    },
                    zoom: 3
                });
            });
        } else {
            console.log('not supported');
        }
    }
}

export default MapComponent;