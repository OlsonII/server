import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'ws';

import { exec } from "child_process";

@WebSocketGateway(3080)
export class EventsGateway{

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('messageToServer')
  handleMessage(): any {
    return new Promise<string>((resolve) => {
      exec(
        'Agent.exe',
        { cwd: process.cwd() + '\\agent' },
        (err, data) => {
          console.log(data.split('"')[1])
          return resolve(data.split('"')[1]);
        });
    });
  }
}