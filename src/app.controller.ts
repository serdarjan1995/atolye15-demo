import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly appService: AppService;

  public constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('developer')
export class TestController {
  private readonly appService: AppService;

  public constructor(appService: AppService) {
    this.appService = appService;
  }

  @Get()
  public getHello(): string {
    return this.appService.getHelloDeveloper();
  }

  @Get('how')
  public getHowAreYou(): string {
    return this.appService.getHowAreYou();
  }
}
