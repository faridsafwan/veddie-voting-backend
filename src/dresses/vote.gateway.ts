import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class VoteGateway {
  @WebSocketServer()
  server: Server;

  updateVotes(data: any) {
    this.server.emit('updateVotes', data);
  }
}
