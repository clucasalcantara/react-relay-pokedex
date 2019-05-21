import React, { Component } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import typeColors from '../../../helpers/typeColors';
import Type from '../../molecules';

class Viewer extends Component {
  renderTypes = () => {
    const { types } = this.props.pokemon;
    return types.map((type, i) => {
      return (
        <Type key={i} color={typeColors[type]}>
          {type}
        </Type>
      );
    });
  };
  renderPokemon = () => {
    const { loading, pokemon, error } = this.props;
    if (!loading && !error) {
      return <img src={pokemon.image} alt={pokemon.name} />;
    } else if (error) {
      //return <PokeballLoader error={true} />
      return <p>{error}</p>;
    } else {
      //return <PokeballLoader />
      return <p>Loading...</p>;
    }
  };
  render() {
    return (
      <div>
        <div>{this.renderPokemon()}</div>
      </div>
    );
  }
}

export default createFragmentContainer(Viewer, {
  pokemon: graphql`
    fragment viewer_pokemon on Pokemon {
      name
      types
      height
      weight
      image
    }
  `
});
