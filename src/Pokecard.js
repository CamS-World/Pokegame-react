import "./Pokecard.css";

import React, { Component } from "react";

// const Poke_API =
//   "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const Poke_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title"> {this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <h2 className="Pokecard-data"> Type:{this.props.type}</h2>
        <h2 className="Pokecard-data">EXP:{this.props.exp}</h2>
      </div>
    );
  }
}

export default Pokecard;
