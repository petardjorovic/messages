import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Administrator } from './entities/Administrator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  sayHello() {
    return 'Hello World!';
  }

  @Get('admins')
  getAdmins(): Promise<Administrator[]> {
    return this.appService.getAll();
  }
}
