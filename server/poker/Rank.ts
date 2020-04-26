class Rank {
    readonly #number: number;
    readonly #string: string;

    private constructor(number: number, string: string) {
        this.#number = number;
        this.#string = string;
    }

    public [Symbol.toPrimitive](hint: string): number | string {
        if (hint === 'number') {
            return this.#number;
        }
        if (hint === 'string') {
            return this.#string;
        }

        return this.#number;
    }

    public equals(other: Rank): boolean {
        if (+this === +other) {
            return true;
        }

        if ((+this === +Rank.LowAce && +other === +Rank.Ace) || (+this === +Rank.Ace && +other === +Rank.LowAce)) {
            return true;
        }

        return false;
    }

    public static LowAce = new Rank(1, 'A');
    public static Two = new Rank(2, '2');
    public static Three = new Rank(3, '3');
    public static Four = new Rank(4, '4');
    public static Five = new Rank(5, '5');
    public static Six = new Rank(6, '6');
    public static Seven = new Rank(7, '7');
    public static Eight = new Rank(8, '8');
    public static Nine = new Rank(9, '9');
    public static Ten = new Rank(10, '10');
    public static Jack = new Rank(11, 'J');
    public static Queen = new Rank(12, 'Q');
    public static King = new Rank(13, 'K');
    public static Ace = new Rank(14, 'A');

    public static *[Symbol.iterator]() {
        yield Rank.Two;
        yield Rank.Three;
        yield Rank.Four;
        yield Rank.Five;
        yield Rank.Six;
        yield Rank.Seven;
        yield Rank.Eight;
        yield Rank.Nine;
        yield Rank.Ten;
        yield Rank.Jack;
        yield Rank.Queen;
        yield Rank.King;
        yield Rank.Ace;
    }
}

export default Rank;
