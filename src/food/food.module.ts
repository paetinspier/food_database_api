import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { DatabaseModule } from 'src/database/database.module';
import { foodProviders } from './models/food.providers';

@Module({
  providers: [FoodService, ...foodProviders],
  controllers: [FoodController],
  imports: [DatabaseModule]
})
export class FoodModule {}
