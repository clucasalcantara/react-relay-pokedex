import React, { Component } from 'react';
import { createFragmentContainer } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';

const Stats = observer(
  class Stats extends Component {
    componentDidMount() {
      if (this.input) {
        this.input.focus();
      }
    }
    onInputClick = e => {
      this.input.focus();
    };
    onInputChange = e => {
      this.caretPosition = window.getSelection().getRangeAt(0).endOffset;
      console.log(this.caretPosition);
    };
    renderStats = () => {
      const {
        name,
        height,
        weight,
        types,
        order,
        description,
        genus
      } = this.props.pokemon;
      return (
        <React.Fragment>
          <div>
            <b>{`${name.charAt(0).toUpperCase()}${name.slice(1)}`}</b> #{order}
          </div>
          <div>HT: {height}m</div>
          <div>WT: {weight}kg</div>
          <div>TYPE: {types.join(', ').toUpperCase()}</div>
          <div>
            <b>{genus}</b>
            <div>{description}</div>
          </div>
        </React.Fragment>
      );
    };
    renderCaret = () => {
      if (this.input) {
        const { width } = this.input.getBoundingClientRect();
        if (this.input.textContent.length > 0) {
          const charWidth = width / this.input.textContent.length;
          return (
            <span style={{ left: `${charWidth * this.caretPosition}px` }} />
          );
        }
      }
    };
    render() {
      console.log(this.props);
      console.log(this.caretPosition);
      return (
        <div>
          <div onClick={this.onInputClick}>
            <span
              onInput={this.onInputChange}
              onKeyDown={this.props.onKeyDown}
              ref={node => (this.input = node)}
              contentEditable="true"
            />
            {this.renderCaret()}
          </div>
          {!this.props.loading && !this.props.error && this.renderStats()}
        </div>
      );
    }
  }
);

decorate(Stats, {
  caretPosition: observable
});

export default createFragmentContainer(Stats, {
  pokemon: graphql`
    fragment stats_pokemon on Pokemon {
      name
      height
      weight
      types
      order
      description
      genus
    }
  `
});
