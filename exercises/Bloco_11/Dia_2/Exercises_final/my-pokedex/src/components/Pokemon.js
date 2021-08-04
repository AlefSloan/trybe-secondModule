import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    return (
      <div className="poke-div" >
        <div>
          <p>Name: {this.props.pokemon.name}</p>
          <p>Type: {this.props.pokemon.type}</p>
          <p>Weight: {this.props.pokemon.averageWeight.value}{this.props.pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={this.props.pokemon.image} alt={this.props.pokemon.name} ></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}

export default Pokemon;