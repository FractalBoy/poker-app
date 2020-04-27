import Hand from '../Hand';
import Card from '../Card';

export default class StraightFlush extends Hand {
    kickers: Card[];
    baseValue: number;

    constructor(cards: Card[]) {
        super(cards.sort((a, b) => +b.rank - +a.rank));
        this.baseValue = 8;
        this.kickers = [cards[0]];
    }
}
