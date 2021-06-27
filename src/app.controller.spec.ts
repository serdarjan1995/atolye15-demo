import { Test, TestingModule } from '@nestjs/testing';
import { AppController, TestController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

describe('TestController', () => {
  let testController: TestController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [AppService],
    }).compile();

    testController = app.get<TestController>(TestController);
  });

  describe('root', () => {
    it('should return "Hello Developer!"', () => {
      expect(testController.getHello()).toBe('Hello Developer!');
    });
  });

  describe('how', () => {
    it('should return "Hey! How are you?"', () => {
      expect(testController.getHowAreYou()).toBe('Hey! How are you?');
    });
  });
});
