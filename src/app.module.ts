import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoodModule } from './food/food.module';
import { DatabaseModule } from './database/database.module';
import { DailyIntakeModule } from './daily_intake/daily_intake.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [FoodModule, DatabaseModule, DailyIntakeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
