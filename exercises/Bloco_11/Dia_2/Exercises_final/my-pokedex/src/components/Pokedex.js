import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      this.props.pokeList.map((pokemon) => <Pokemon key={pokemon.id} pokemon={ pokemon } />)
    )
  }
}

Pokedex.propTypes = {
  pokeList: PropTypes.arrayOf(PropTypes.object),
}

export default Pokedex;