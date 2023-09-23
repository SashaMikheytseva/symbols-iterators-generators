/* eslint-disable  no-unused-vars */

import Character from './Character';

export default class TeamGen {
  constructor() {
    this.players = new Set();
  }

  add(character) {
    this.players.add(character);
  }

  addAll(...characters) {
    characters.forEach((hero) => this.members.add(hero));
  }

  toArray() {
    return Array.from(this.players);
  }

  * [Symbol.iterator]() {
    for (const player of this.players) {
      yield player;
    }
  }
}
