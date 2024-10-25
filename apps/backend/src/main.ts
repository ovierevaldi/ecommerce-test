import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function startServer() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Automatically strip properties that do not have decorators
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted values are found
    transform: true, // Automatically transform payloads to match DTOs
  }));

  app.enableCors();
  await app.listen(3000);
}
startServer();
