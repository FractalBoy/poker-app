import Rank from './Rank';
import Suit from './Suit';

export default class Card {
    private readonly rank: Rank;
    private readonly suit: Suit;

    constructor(rank: Rank, suit: Suit) {
        this.rank = rank;
        this.suit = suit;
    }

    public toString = () => `${this.rank}${this.suit}`;
}
