import React, { Component } from 'react'
import { Viewer, Stats } from '../../organisms'

export default class Pokedex extends Component {
  render() {
    return (
      <div className="pokedex__container">
        <Viewer pokemon={this.props.pokemon} error={this.props.error} loading={this.props.loading} />
        <Stats onKeyDown={this.props.onKeyDown} error={this.props.error} pokemon={this.props.pokemon} loading={this.props.loading} />
      </div>
    )
  }
}
