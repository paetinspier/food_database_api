import { Module } from '@nestjs/common';
import { DailyIntakeController } from './daily_intake.controller';
import { DailyIntakeService } from './daily_intake.service';
import { DatabaseModule } from 'src/database/database.module';
import { dailyIntakeProviders } from './models/daily_intake.providers';

@Module({
  controllers: [DailyIntakeController],
  providers: [DailyIntakeService, ...dailyIntakeProviders],
  imports: [DatabaseModule]
})
export class DailyIntakeModule {}
