export default class Suit {
  readonly #symbol: string;

  public static readonly Spades = new Suit('\u2660');
  public static readonly Hearts = new Suit('\u2665');
  public static readonly Diamonds = new Suit('\u2666');
  public static readonly Clubs = new Suit('\u2663');

  private constructor(symbol: string) {
    this.#symbol = symbol;
  }

  public [Symbol.toPrimitive](hint: string): string | null {
    if (hint === 'number') {
      return null;
    }
    if (hint === 'string') {
      return this.#symbol;
    }

    return this.#symbol;
  }

  public static *[Symbol.iterator]() {
    yield Suit.Spades;
    yield Suit.Hearts;
    yield Suit.Diamonds;
    yield Suit.Clubs;
  }
}
