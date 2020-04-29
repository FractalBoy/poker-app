import 'should';
import { describe } from 'mocha';
import Hands from '../poker/Hands';
import Card from '../poker/Card';
import Rank from '../poker/Rank';
import Suit from '../poker/Suit';
import Straight from '../poker/Hands/Straight';

describe('Hands', function () {
    describe('possibleStraights', function () {
        it('should return an empty array when there are no straights', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Spades),
                new Card(Rank.Eight, Suit.Spades),
                new Card(Rank.Six, Suit.Clubs),
                new Card(Rank.Four, Suit.Clubs),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const straights = hands.possibleStraights();
            straights.should.be.an.Array();
            straights.should.have.length(0);
        });

        it('should return a single straight when there is one straight', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Spades),
                new Card(Rank.King, Suit.Spades),
                new Card(Rank.Six, Suit.Clubs),
                new Card(Rank.Jack, Suit.Clubs),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const straights = hands.possibleStraights();
            straights.should.be.a.Array();
            straights.should.have.length(1);
            straights[0].cards.should.deepEqual([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.King, Suit.Spades),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Jack, Suit.Clubs),
                new Card(Rank.Ten, Suit.Spades)
            ]);
        });
    });

    describe('possibleFlushes', function () {
        it('should return an empty array when there are no flushes', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Spades),
                new Card(Rank.Eight, Suit.Spades),
                new Card(Rank.Six, Suit.Clubs),
                new Card(Rank.Four, Suit.Clubs),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const flushes = hands.possibleFlushes();
            flushes.should.be.an.Array();
            flushes.should.have.length(0);
        });
        // it('should return a single flush when there is one flush', function () {});
    });
});
