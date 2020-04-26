class Rank {
  private readonly number: number;
  private readonly string: string;

  private constructor(number: number, string: string) {
    this.number = number;
    this.string = string;
  }

  public [Symbol.toPrimitive] = (hint: string): number | string => {
    if (hint === 'number') {
      return this.number;
    }
    if (hint === 'string') {
      return this.string;
    }

    return this.number;
  };

  public equals(other: Rank): boolean {
    if (+this === +other) {
      return true;
    }

    if (
      (+this === +Rank.LowAce && +other === +Rank.Ace) ||
      (+this === +Rank.Ace && +other === +Rank.LowAce)
    ) {
      return true;
    }

    return false;
  }

  public toString(): string {
    return this.string;
  }

  public static get LowAce(): Rank {
    return new Rank(1, 'A');
  }

  public static get Two(): Rank {
    return new Rank(2, '2');
  }

  public static get Three(): Rank {
    return new Rank(3, '3');
  }

  public static get Four(): Rank {
    return new Rank(4, '4');
  }

  public static get Five(): Rank {
    return new Rank(5, '5');
  }

  public static get Six(): Rank {
    return new Rank(6, '6');
  }

  public static get Seven(): Rank {
    return new Rank(7, '7');
  }

  public static get Eight(): Rank {
    return new Rank(8, '8');
  }

  public static get Nine(): Rank {
    return new Rank(9, '9');
  }

  public static get Ten(): Rank {
    return new Rank(10, '10');
  }

  public static get Jack(): Rank {
    return new Rank(11, 'J');
  }

  public static get Queen(): Rank {
    return new Rank(12, 'Q');
  }

  public static get King(): Rank {
    return new Rank(13, 'K');
  }

  public static get Ace(): Rank {
    return new Rank(14, 'A');
  }

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
