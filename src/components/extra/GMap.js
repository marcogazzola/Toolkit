// NOTE: you need to include the GoogleMap CDN in your project
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class GMap extends Component {

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this);
    this.map = new google.maps.Map(element, { // eslint-disable-line
      center: this.props.coords,
      zoom: this.props.zoom,
    });
    this.map.setCenter(new google.maps.LatLng(this.props.coords.lat, this.props.coords.lng)); // eslint-disable-line
    this.marker = new google.maps.Marker({ // eslint-disable-line
      map: this.map,
      draggable: this.props.draggable,
      animation: google.maps.Animation.BOUNCE, // eslint-disable-line
      position: { lat: this.props.coords.lat, lng: this.props.coords.lng },
    });
  }

  componentWillReceiveProps(nextProps) {
    let lat = nextProps.coords.lat;
    let lng = nextProps.coords.lng;
    if (nextProps.draggable) {
      lat = this.marker.getPosition().lat();
      lng = this.marker.getPosition().lng();
    }
    // Update only if coords are different
    if (this.props.coords.lat !== lat ||
      this.props.coords.lng !== lng) {

      this.marker.setPosition(new google.maps.LatLng(nextProps.coords.lat, nextProps.coords.lng)); // eslint-disable-line
      this.setCenter(nextProps.coords.lat, nextProps.coords.lng);
      this.setZoom(this.props.zoom);
    }
  }

  getCoords() {
    return this.marker.getPosition();
  }
  setZoom(level) {
    this.map.setZoom(level);
  }
  setCenter(lat, lng) {
    this.map.setCenter(new google.maps.LatLng(lat, lng)); // eslint-disable-line
  }

  render() {
    const { height } = this.props;
    return (
      <div style={{ width: '100%', height }}></div>
    );
  }
}


// PropTypes validation
GMap.propTypes = {
  coords: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  height: PropTypes.number,
  zoom: PropTypes.number,
  draggable: PropTypes.bool,
};

// default props
GMap.defaultProps = {
  coords: { lat: 45, lng: 12 },
  zoom: 8,
  height: 300,
  draggable: false,
};
