import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/data')
  getData() {
    return this.appService.getData();
  }
  @Get('/da')
  getData2() {
    return this.appService.getData();
  }
}
