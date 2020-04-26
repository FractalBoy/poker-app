import Suit from './Suit';
import Rank from './Rank';
import Card from './Card';

export default class Deck {
  private readonly cards: Card[];

  private constructor() {
    this.cards = [];

    for (const suit of Suit) {
      for (const rank of Rank) {
        this.cards.push(new Card(rank, suit));
      }
    }

    for (let i = 0; i < 7; i++) {
      this.shuffle();
    }
  }

  public shuffle(): void {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      [this.cards[randomIndex], this.cards[i]] = [
        this.cards[i],
        this.cards[randomIndex],
      ];
    }
  }

  public deal_one(): Card | undefined {
    return this.cards.shift();
  }
}
