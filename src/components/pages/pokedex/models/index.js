import { observable, action, decorate } from 'mobx';
class PokedexModel {
  pokemon = 'pikachu';

  changePokemon = pokemon => (this.pokemon = pokemon);
}

decorate(PokedexModel, {
  pokemon: observable,
  changePokemon: action
});

export default PokedexModel;
