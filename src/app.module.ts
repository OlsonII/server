import { Module } from '@nestjs/common';
import { EventsModule } from "./sockets/events.module";

@Module({
  imports: [EventsModule]
})
export class AppModule {}
