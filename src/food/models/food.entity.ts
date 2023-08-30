import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Food extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true, // Add this option to auto-generate the id
  })
  id: number;

  @Column
  title: string;

  @Column
  upc: string;

  @Column
  calories: number;

  @Column
  protein: number;

  @Column
  carbohydrates: number;

  @Column
  fat: number;

  @Column
  servingSize: number;

  @Column
  servingUnits: number;

  @Column
  verified: boolean;
}
