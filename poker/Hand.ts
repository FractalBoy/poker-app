import Card from './Card';
import Hands from './Hands';

export default abstract class Hand {
    protected readonly cards: Card[];
    abstract kickers: Card[];
    abstract baseValue: number;

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public isStraight(): boolean {
        return Hands.isStraight(this.cards);
    }

    public isFlush(): boolean {
        return Hands.isFlush(this.cards);
    }

    public equals(hand: Hand): boolean {
        return this.cards.every(m => hand.cards.filter(t => t.rank === m.rank && t.suit === m.suit).length);
    }

    public compareTo(hand: Hand): number {
        const diff = this.value - hand.value;
        return diff / Math.abs(diff);
    }

    public get value(): number {
        let value = this.baseValue;
        let multiplier = 0.1;

        for (const kicker of this.kickers) {
            value += +kicker.rank * multiplier;
            multiplier /= 10;
        }

        return value;
    }
}
