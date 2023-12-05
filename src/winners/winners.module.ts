import { Module } from '@nestjs/common';
import { WinnersService } from './winners.service';
import { WinnersController } from './winners.controller';
import { Winner } from './entities/winner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Winner])],
  controllers: [WinnersController],
  providers: [WinnersService],
})
export class WinnersModule {}
