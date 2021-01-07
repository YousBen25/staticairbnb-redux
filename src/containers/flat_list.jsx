import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flat from './flat';
import { setFlats } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends React.Component {
  // TEMPORARY CODE TO INTEGRATE HTML
  static defaultProps = {
    flats: [{
      name: "Charm at the Steps of Montmartre",
      imageUrl: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      price: 164,
      priceCurrency: "EUR"
    }]
  }

  UNSAFE_componentWillMount() {
    // todo: dispatch an action to update the redux state tree (flats)
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map(flat => <Flat flat={flat} key={flat.name} />)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    flats: state.flats
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
