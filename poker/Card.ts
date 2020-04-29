import Rank from './Rank';
import Suit from './Suit';

export default class Card {
    private readonly _rank: Rank;
    private readonly _suit: Suit;

    constructor(rank: Rank, suit: Suit) {
        this._rank = rank;
        this._suit = suit;
    }

    public get rank() {
        return this._rank;
    }
    public get suit() {
        return this._suit;
    }

    public equals(card: Card) {
        return this.rank === card.rank && this.suit === card.suit;
    }

    public toString = () => `${this.rank}${this.suit}`;

    public [Symbol.toStringTag](): string {
        return this.toString();
    }
}
