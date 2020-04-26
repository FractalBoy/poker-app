import Player from './Player';
import Card from './Card';
import Deck from './Deck';

export default class Table {
    private readonly capacity: number;
    private readonly players: Player[] = [];
    private readonly deck: Deck;
    private readonly community: Card[] = [];
    private dealerIndex: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.deck = new Deck();
    }

    public seatPlayer(player: Player): boolean {
        if (this.players.length < this.capacity) {
            this.players.push(player);
            return true;
        }
        return false;
    }

    public unseatPlayer(player: Player): boolean {
        const playerIndex = this.players.indexOf(player);

        if (playerIndex === -1) {
            return false;
        }

        this.players.splice(playerIndex, 1);
        return true;
    }

    public dealPocketCards(): void {
        for (const player of this.players) {
            player.collectCards();
        }

        this.deck.collectAndShuffle();

        for (let i = 0; i < 2; i++) {
            for (const player of this.playersToLeftOfDealer()) {
                const card = this.deck.dealOne();
                if (typeof card !== 'undefined') {
                    player.dealOne(card);
                }
            }
        }
    }

    public dealFlop(): void {
        for (let i = 0; i < 3; i++) {
            const card = this.deck.dealOne();
            if (typeof card !== 'undefined') {
                this.community.push(card);
            }
        }
    }

    public dealTurnOrRiver(): void {
        const card = this.deck.dealOne();
        if (typeof card !== 'undefined') {
            this.community.push(card);
        }
    }

    public *playersToLeftOfDealer() {
        // Deal starting to the left of the dealer
        for (let i = this.dealerIndex - 1; i >= 0; i--) {
            yield this.players[i];
        }
        // Continue dealing from where we left off
        for (let i = this.players.length; i >= this.dealerIndex; i--) {
            yield this.players[i];
        }
    }

    public *playersToLeftOfBigBlind() {
        // Deal starting to the left of the dealer
        for (let i = this.dealerIndex - 3; i >= 0; i--) {
            yield this.players[i];
        }
        // Continue dealing from where we left off
        for (let i = this.players.length; i >= this.dealerIndex - 2; i--) {
            yield this.players[i];
        }
    }
}
