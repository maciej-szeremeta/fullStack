import { NestFactory, } from '@nestjs/core';
import { AppModule, } from './app.module';
import { NestExpressApplication, } from '@nestjs/platform-express';
import * as morgan from 'morgan';
import rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  (app as NestExpressApplication).use(morgan('dev'));
  (app as NestExpressApplication).use( (rateLimit ({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max     : 100, // Limit each IP to 100 requests per `window`  (here, per 15 minutes)
  })));
  await app.listen(3001);
}
bootstrap();
