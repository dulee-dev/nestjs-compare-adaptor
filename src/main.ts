import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { HyperExpressAdapter } from './libs/hyper-express.adaptor';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, new FastifyAdapter());
  const app = await NestFactory.create(AppModule, new HyperExpressAdapter());
  await app.listen(3000);
}
bootstrap();
