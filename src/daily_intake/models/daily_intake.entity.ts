import { Column, Table, Model } from 'sequelize-typescript';
import { DailyIntakeModel } from './daily_intake.Model';

@Table
export class DailyIntake extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column
  user_id: number;

  @Column
  date: Date;

  @Column
  total_calories: number;

  @Column
  total_carbs: number;

  @Column
  total_proteins: number;

  @Column
  total_fats: number;

  static fromModel(dim: DailyIntakeModel): DailyIntake {
    let entity = new DailyIntake();
    entity.id = dim.id;
    entity.user_id = dim.user_id;
    entity.date = dim.date;
    entity.total_calories = dim.total_calories;
    entity.total_carbs = dim.total_carbs;
    entity.total_proteins = dim.total_proteins;
    entity.total_fats = dim.total_fats;

    return entity;
  }
}
