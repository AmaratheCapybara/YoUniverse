/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
  },
  pingTimeout: 60000,
})
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: any) {
    console.log('Socket.io gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  @SubscribeMessage('setup')
  handleSetup(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ): void {
    client.join(data._id);
    client.emit('connected');
  }

  @SubscribeMessage('join chat')
  handleJoinChat(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ): void {
    client.join(room);
    console.log(`Joined room: ${room}`);
  }

  @SubscribeMessage('typing')
  handleTyping(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ): void {
    client.to(room).emit('typing');
  }

  @SubscribeMessage('stop typing')
  handleStopTyping(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ): void {
    client.to(room).emit('stop typing');
  }

  @SubscribeMessage('new message')
  handleNewMessage(
    @MessageBody() newMessage: any,
    @ConnectedSocket() client: Socket,
  ): void {
    const chat = newMessage.chat;
    if (!chat?.Profiles) return console.log('chat.Profiles not defined');

    chat.Profiles.forEach((Profile: any) => {
      if (Profile._id === newMessage.sender._id) return;
      client.to(Profile._id).emit('message recieved', newMessage);
    });
  }
}
