import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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

  @Get('admins/:id')
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getById(id);
  }
}
