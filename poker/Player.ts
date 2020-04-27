import Card from './Card';
import Hand from './Hands';

export default class Player {
    private hand: Card[] = [];

    public dealOne(card: Card): void {
        this.hand.push(card);
    }

    public collectCards(): void {
        this.hand.splice(0, this.hand.length);
    }
}
