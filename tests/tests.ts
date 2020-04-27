import { describe } from 'mocha';
import assert from 'assert';
import Hands from '../poker/Hands';
import Card from '../poker/Card';
import Rank from '../poker/Rank';
import Suit from '../poker/Suit';
import Straight from '../poker/Hands/Straight';

describe('Hands', () => {
    describe('possibleStraights', () => {
        it('should return an empty array when there are no straights', () => {
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
            assert.ok(straights instanceof Array, 'is an array');
            assert.equal(straights.length, 0, 'array is empty');
        });

        it('should return a single straight when there is one straight', () => {
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
            assert.ok(straights instanceof Array, 'is an array');
            assert.equal(straights.length, 1, 'array has one element');
            assert.ok(
                straights[0].equals(
                    new Straight([
                        new Card(Rank.Ace, Suit.Diamonds),
                        new Card(Rank.King, Suit.Spades),
                        new Card(Rank.Queen, Suit.Diamonds),
                        new Card(Rank.Jack, Suit.Clubs),
                        new Card(Rank.Ten, Suit.Spades)
                    ])
                )
            );
        });
    });
});
