import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'ws';

import { ExecuteAgentService } from "../application/execute.agent.service";

@WebSocketGateway(3080)
export class EventsGateway{

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('messageToServer')
  handleMessage(): any {
    return ExecuteAgentService.execute();
  }
}