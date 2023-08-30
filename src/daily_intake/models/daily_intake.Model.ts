import { DailyIntake } from './daily_intake.entity';

export class DailyIntakeModel {
  id?: number;
  user_id: number;
  date: Date;
  total_calories: number;
  total_carbs: number;
  total_proteins: number;
  total_fats: number;

  static fromEntity(dailyIntake: DailyIntake): DailyIntakeModel {
    let model = new DailyIntakeModel();
    model.id = dailyIntake.id;
    model.user_id = dailyIntake.user_id;
    model.date = dailyIntake.date;
    model.total_calories = dailyIntake.total_calories;
    model.total_carbs = dailyIntake.total_carbs;
    model.total_proteins = dailyIntake.total_proteins;
    model.total_fats = dailyIntake.total_fats;
    return model;
  }
}
