import React from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class Map extends React.Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      // eslint-disable-next-line react/jsx-wrap-multilines
      marker = <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%' }}
        lat={this.props.selectedFlat.lat}
        lng={this.props.selectedFlat.lng}
      />;
      center = {
        lat: this.props.selectedFlat.lat,
        lng: this.props.selectedFlat.lng
      };
    }

    return (
      <div className="col-sm-5" style={{ height: '100vh' }}>
        <GoogleMapReact
          center={center}
          defaultZoom={15}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}
export default connect(mapStateToProps)(Map);
