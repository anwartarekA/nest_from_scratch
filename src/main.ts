import { Controller, Get, Module } from '@nestjs/common';

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
