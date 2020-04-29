/* tslint:disable:only-arrow-functions */

import 'should';
import { describe } from 'mocha';
import Hands from '../poker/Hands';
import Card from '../poker/Card';
import Rank from '../poker/Rank';
import Suit from '../poker/Suit';

describe('Hands', function () {
    describe('possibleStraightFlushes', function () {
        it('should return an empty array when there are no straight flushes', function () {
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

            const straightFlushes = hands.possibleStraightFlushes();
            straightFlushes.should.be.an.Array();
            straightFlushes.should.have.lengthOf(0);
        });

        it('should return a single straight flush when there is one straight flush', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.King, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Jack, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds),
                new Card(Rank.Four, Suit.Clubs),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const straightFlushes = hands.possibleStraightFlushes();
            straightFlushes.should.be.an.Array();
            straightFlushes.should.have.lengthOf(1);
            straightFlushes[0].cards.should.deepEqual([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.King, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Jack, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds)
            ]);
        });
    });

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
            straights.should.have.lengthOf(0);
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
            straights.should.have.lengthOf(1);
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
            flushes.should.have.lengthOf(0);
        });

        it('should return a single flush when there are five cards of the same suit', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds),
                new Card(Rank.Eight, Suit.Diamonds),
                new Card(Rank.Six, Suit.Diamonds),
                new Card(Rank.Four, Suit.Clubs),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const flushes = hands.possibleFlushes();
            flushes.should.be.an.Array();
            flushes.should.have.lengthOf(1);
            flushes[0].cards.should.deepEqual([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds),
                new Card(Rank.Eight, Suit.Diamonds),
                new Card(Rank.Six, Suit.Diamonds)
            ]);
        });

        it('should return six flushes when there are six cards of the same suit', function () {
            const hands = new Hands([
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds),
                new Card(Rank.Eight, Suit.Diamonds),
                new Card(Rank.Six, Suit.Diamonds),
                new Card(Rank.Four, Suit.Diamonds),
                new Card(Rank.Three, Suit.Hearts),
                new Card(Rank.Two, Suit.Hearts)
            ]);

            const flushes = hands.possibleFlushes();
            flushes.should.be.an.Array();
            flushes.should.have.lengthOf(6);
            for (const card of [
                new Card(Rank.Ace, Suit.Diamonds),
                new Card(Rank.Queen, Suit.Diamonds),
                new Card(Rank.Ten, Suit.Diamonds),
                new Card(Rank.Eight, Suit.Diamonds),
                new Card(Rank.Six, Suit.Diamonds),
                new Card(Rank.Four, Suit.Diamonds)
            ]) {
                flushes.filter(f => f.cards.filter(c => c.equals(card)).length).should.have.lengthOf(5);
            }
        });
    });
});
