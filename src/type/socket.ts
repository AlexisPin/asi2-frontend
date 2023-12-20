import { CardType } from "./card";

export interface SendMessageDao {
  conversation_id: string;
  timestamp: number;
  sender_id: number;
  content: string;
}

export interface ServerToClientEvents {
  chat_message: (message: SendMessageDao) => void;
  notification: (message: NotificationType) => void;
  request_game_room: (game_id: string, name: string) => void;
  update_game_room: (status: GameState) => void;
}

export type NotificationType = 'users_change';

export interface ClientToServerEvents {
  login: (user_id: number) => void;
  join_chat_room: (user_id: number) => void;
  leave_chat_room: (user_id: number) => void;
  join_game_room: (game_id: string, user_id: number, name: string) => void;
  request_game_room: (user_id: number, name: string) => void;
  leave_game_room: (game_id: string) => void;
  ready_game_room: (game_id: string, user_id: number, cards: number[]) => void;
}

export interface PlayerDto {
  id: number;
  name: string;
  cards: GameCard[];
  pa: number;
}

export enum CardState {
  ALIVE = 'ALIVE',
  DEAD = 'DEAD',
}

export type GameCard = CardType & { state: CardState }


export interface RegisterPlayerDto {
  id: number;
  name: string;
}

export interface GameDto {
  id: string;
  turn: number;
  players: Map<number, PlayerDto>;
}


export type GameState =
  | {
    NotStarted: {
      game_id: string;
      players: RegisterPlayerDto[];
    }
  }
  | {
    Choosing: {
      game_id: string;
      players: RegisterPlayerDto[];
    }
  }
  | {
    Waiting: {
      game_id: string;
      players: {
        id: number;
        name: string;
        cards: number[];
      }[];
      ready: number[];
    }
  }
  | {
    Playing: {
      state: GameDto;
    };
  }
  | {
    Finished: {
      winner: number;
      loser: number;
    };
  };