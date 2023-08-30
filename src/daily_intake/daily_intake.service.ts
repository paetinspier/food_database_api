import { Inject, Injectable } from '@nestjs/common';
import { DailyIntake } from './models/daily_intake.entity';

@Injectable()
export class DailyIntakeService {
  constructor(
    @Inject('DAILY_INTAKE_REPOSITORY')
    private readonly repo: typeof DailyIntake,
  ) {}

  public async createDailyIntakeDay(user_id: number): Promise<DailyIntake> {
    try {
      const todaysDate = new Date();
      todaysDate.setHours(0, 0, 0, 0);
      return this.repo.create({
        user_id: user_id,
        date: todaysDate,
        total_calories: 0,
        total_carbs: 0,
        total_proteins: 0,
        total_fats: 0,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async updateDailyIntake(
    total_calories: number,
    total_carbs: number,
    total_proteins: number,
    total_fats: number,
    user_id: number,
  ): Promise<DailyIntake> {
    try {
      const todaysDate = new Date();
      todaysDate.setHours(0, 0, 0, 0);
      const updatedDI = await this.repo.update(
        {
          total_calories: total_calories,
          total_carbs: total_carbs,
          total_proteins: total_proteins,
          total_fats: total_fats,
        },
        {
          where: {
            date: todaysDate,
            user_id: user_id,
          },
        },
      );
      if (updatedDI && updatedDI.length > 0) {
        return await this.repo.findOne<DailyIntake>({
          where: { date: todaysDate, user_id: user_id },
        });
      }
      else{
        return null;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
