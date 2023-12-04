import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DressesModule } from './dresses/dresses.module';
import { VoteGateway } from './dresses/vote.gateway';

@Module({
  imports: [DressesModule],
  controllers: [AppController],
  providers: [AppService, VoteGateway],
})
export class AppModule {}
