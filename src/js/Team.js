/* eslint-disable  no-unused-vars */

import Character from './Character';

export default class Team {
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

  [Symbol.iterator]() {
    const players = this.toArray();
    let index = 0;
    return {
      next() {
        if (index === players.length) {
          return {
            value: undefined,
            done: true,
          };
        }
        return {
          // eslint-disable-next-line no-plusplus
          value: players[index++],
          done: false,
        };
      },
    };
  }
}
