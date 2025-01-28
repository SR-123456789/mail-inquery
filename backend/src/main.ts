import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:3000';
  

  app.enableCors({
    origin: '*', // すべてのオリジンを許可（本番では特定のドメインに制限するのが望ましい）
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  // await app.listen(process.env.PORT ?? 3000);
  const port = process.env.PORT || 3000;
  await app.listen(port);

}
bootstrap();
