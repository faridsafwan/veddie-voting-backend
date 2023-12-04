import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { IoAdapter } from '@nestjs/platform-socket.io';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for WebSocket
  app.enableCors();

  // Attach WebSocket Adapter
  app.useWebSocketAdapter(new IoAdapter(app));

  await app.listen(3030);
}
bootstrap();
