import { combination } from 'js-combinatorics';
import Card from './Card';
import Flush from './Hands/Flush';
import Straight from './Hands/Straight';
import StraightFlush from './Hands/StraightFlush';

export default class Hands {
    private readonly combinations: Card[][];

    constructor(cards: Card[]) {
        this.combinations = combination(cards, 5).toArray();
    }

    public possibleStraightFlushes(): StraightFlush[] {
        const possibleStraights = this.possibleStraights();
        const straightFlushes: StraightFlush[] = [];

        for (const straight of possibleStraights) {
            if (straight.isFlush()) {
                straightFlushes.push(straight);
            }
        }

        return straightFlushes;
    }

    public possibleStraights(): Straight[] {
        const straights: Straight[] = [];

        for (const hand of this.combinations) {
            if (Hands.isStraight(hand)) {
                straights.push(new Straight(hand));
            }
        }

        return straights;
    }

    public possibleFlushes(): Flush[] {
        const flushes: Flush[] = [];
        for (const hand of this.combinations) {
            if (Hands.isFlush(hand)) {
                flushes.push(new Flush(hand));
            }
        }

        return flushes;
    }

    public static isStraight(cards: Card[]): boolean {
        const sorted = cards.sort((a, b) => +a.rank - +b.rank);
        for (let i = 1; i < sorted.length; i++) {
            if (+sorted[i].rank - 1 !== +sorted[i - 1].rank) {
                return false;
            }
        }

        return true;
    }

    public static isFlush(cards: Card[]): boolean {
        return cards.every(c => c.suit === cards[0].suit);
    }
}
