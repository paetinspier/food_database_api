import { Test, TestingModule } from '@nestjs/testing';
import { DailyIntakeService } from './daily_intake.service';

describe('DailyIntakeService', () => {
  let service: DailyIntakeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DailyIntakeService],
    }).compile();

    service = module.get<DailyIntakeService>(DailyIntakeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
