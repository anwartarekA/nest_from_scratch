import { NestFactory } from '@nestjs/core';
import { AppController } from './app.controller';
// create app module
@Module({
  controllers: [AppController],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.listen(3000);
}
bootstrap();
