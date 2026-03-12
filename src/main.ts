import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// make app controller
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi there!';
  }
}

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
