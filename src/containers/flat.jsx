import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends React.Component {
  handleClick = () => {
    // REDUX ACTION
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')`
    };

    let classes = "flat card-trip";

    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }
    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p>{this.props.flat.price} {this.props.flat.priceCurrency} </p>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Flat);
