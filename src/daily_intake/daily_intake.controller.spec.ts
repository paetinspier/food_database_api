import { Test, TestingModule } from '@nestjs/testing';
import { DailyIntakeController } from './daily_intake.controller';

describe('DailyIntakeController', () => {
  let controller: DailyIntakeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyIntakeController],
    }).compile();

    controller = module.get<DailyIntakeController>(DailyIntakeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
