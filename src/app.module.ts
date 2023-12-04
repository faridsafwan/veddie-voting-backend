import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DressesModule } from './dresses/dresses.module';
import { VoteGateway } from './dresses/vote.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DressesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://weddie_voting_user:6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3@dpg-clmurt7feb2c73ed9jug-a.singapore-postgres.render.com/weddie_voting',
      port: 5432,
      username: 'weddie_voting_user',
      password: '6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3',
      database: 'weddie_voting',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true, // Add this line
    }),
  ],
  controllers: [AppController],
  providers: [AppService, VoteGateway],
})
export class AppModule {}
