import { Module } from '@nestjs/common';
import { EventsModule } from "./controller/events.module";

@Module({
  imports: [EventsModule]
})
export class AppModule {}
