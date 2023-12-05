import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DressesModule } from './dresses/dresses.module';
import { VoteGateway } from './dresses/vote.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinnersModule } from './winners/winners.module';

@Module({
  imports: [
    DressesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        process.env.DATABASE_URL ||
        'postgres://weddie_voting_user:6kJZxBFeTc9jwAH9N0cElo3BoMO7YTd3@dpg-clmurt7feb2c73ed9jug-a.singapore-postgres.render.com/weddie_voting',
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true, // Add this line
    }),
    WinnersModule,
  ],
  controllers: [AppController],
  providers: [AppService, VoteGateway],
})
export class AppModule {}
