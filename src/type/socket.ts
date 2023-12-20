export interface SendMessageDao {
  conversation_id: string;
  timestamp: number;
  sender_id: number;
  content: string;
}

export type NotificationType = 'users_change';

export interface ServerToClientEvents {
  chat_message: (message: SendMessageDao) => void;
  notification: (message: NotificationType) => void;
  login: () => void;
}

export interface ClientToServerEvents {
  join_chat_room: (user_id: number) => void;
  leave_chat_room: (user_id: number) => void;
  login: (user_id: number) => void;
  join_game_room: (game_id: string) => void;
  leave_game_room: (game_id: string) => void;
  ready: () => void;
}
