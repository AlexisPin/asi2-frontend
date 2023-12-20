import {
  io,
  Socket,
} from 'socket.io-client';

import {
  ClientToServerEvents,
  ServerToClientEvents,
} from './type/socket';

const URL = "http://localhost:3000";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(URL);