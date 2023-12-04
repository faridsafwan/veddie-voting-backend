import { Module } from '@nestjs/common';
import { DressesService } from './dresses.service';
import { DressesController } from './dresses.controller';
import { VoteGateway } from './vote.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dress } from './entities/dress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dress])],
  controllers: [DressesController],
  providers: [DressesService, VoteGateway],
})
export class DressesModule {}
