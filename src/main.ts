import { Controller, Get } from '@nestjs/common';

// make app controller
@Controller()
class AppController {
  @Get()
  getRootRoute() {
    return 'hi there!';
  }
}
