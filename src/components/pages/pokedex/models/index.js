import { observable, action } from 'mobx'

export default class PokedexModel {
  @observable pokemon = 'pikachu'

  @action changePokemon = pokemon => this.pokemon = pokemon
}
