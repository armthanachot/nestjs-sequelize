import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { db } from '../db/index';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  db.sequelize.sync({
    alter: true,
  }); //auto alter
  await app.listen(3000);
}
bootstrap();
