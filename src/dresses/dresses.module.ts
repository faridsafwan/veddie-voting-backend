import { Module } from '@nestjs/common';
import { DressesService } from './dresses.service';
import { DressesController } from './dresses.controller';
import { VoteGateway } from './vote.gateway';

@Module({
  controllers: [DressesController],
  providers: [DressesService, VoteGateway],
})
export class DressesModule {}
