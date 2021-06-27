import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    return 'Hello World!';
  }

  public getHelloDeveloper(): string {
    return 'Hello Developer!';
  }

  public getHowAreYou(): string {
    return 'Hello! How are you?';
  }
}
