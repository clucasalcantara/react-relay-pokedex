import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay'
import environment from './environment'
import Pokedex from './components/pages'
import { observer } from 'mobx-react'

@observer
class App extends Component {
  onSubmit = (e) => {
    if (e.keyCode === 13) {
      this.props.store.changePokemon(e.target.textContent.toLowerCase())
    }
  }
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppPokemonQuery($name: String) {
            pokemon(name: $name) {
              ...viewer_pokemon
              ...stats_pokemon
            }
          }
        `}
        variables={{ name: this.props.store.pokemon }}
        render={({ error, props }) => {
          console.log(error, props)
          if (error) {
            return (
              <div>
                <Pokedex onKeyDown={this.onSubmit} error={true} />
              </div>
            )
          }
          if (!props) {
            return (
              <div>
                <Pokedex onKeyDown={this.onSubmit} loading={true} />
              </div>
            )
          }
          return (
            <div>
              <Pokedex onKeyDown={this.onSubmit} pokemon={props.pokemon} />
            </div>
          )
        }}
      />
    )
  }
}

export default App;
