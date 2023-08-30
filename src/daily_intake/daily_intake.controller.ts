import { Controller } from '@nestjs/common';
import { DailyIntakeService } from './daily_intake.service';

@Controller('daily-intake')
export class DailyIntakeController {
  constructor(public readonly service: DailyIntakeService) {}
}
