import { IPokerStateMachine } from './IPokerStateMachine';
import Table from './Table';
import Player from './Player';

enum TexasHoldEmState {
  Seating,
  DealingPocketCards,
  PreFlopBetting,
  DealingFlop,
  PostFlopBetting,
  DealingTurn,
  PostTurnBetting,
  DealingRiver,
  PostRiverBetting,
  SelectingWinner,
  CollectingCards,
}

export default class TexasHoldEmStateMachine implements IPokerStateMachine {
  private state: TexasHoldEmState;
  private readonly table: Table;

  private readonly dispatchTable: {
    [state in keyof typeof TexasHoldEmState]: () => void;
  } = {
    Seating: () => {
        // add players to table
        // when table is full or players are ready,
        this.table.seatPlayer(new Player());
        this.state = TexasHoldEmState.DealingPocketCards;
    },
    DealingPocketCards: () => {},
    PreFlopBetting: () => {},
    DealingFlop: () => {},
    PostFlopBetting: () => {},
    DealingTurn: () => {},
    PostTurnBetting: () => {},
    DealingRiver: () => {},
    PostRiverBetting: () => {},
    SelectingWinner: () => {},
    CollectingCards: () => {},
  };

  constructor(table: Table) {
    this.table = table;
    this.state = TexasHoldEmState.Seating;
  }

  doNextAction(): void {
    this.dispatchTable[this.state]();
  }
}
