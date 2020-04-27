import Hand from '../Hand';
import Card from '../Card';

export default class Flush extends Hand {
    kickers: Card[];
    baseValue: number;

    constructor(cards: Card[]) {
        super(cards.sort((a, b) => +b.rank - +a.rank));
        this.kickers = this.cards.slice();
        this.baseValue = 5;
    }
}
