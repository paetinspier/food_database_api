import { Inject, Injectable } from '@nestjs/common';
import { Food } from './models/food.entity';
import { FoodModel } from './models/food.model';
import { Op } from 'sequelize';

@Injectable()
export class FoodService {
  constructor(
    @Inject('FOOD_REPOSITORY')
    private readonly repo: typeof Food,
  ) {}

  async findAll(): Promise<Food[]> {
    return this.repo.findAll<Food>();
  }

  async createFood(newFood: FoodModel): Promise<Food> {
    return this.repo.create<Food>({
      title: newFood.title,
      upc: newFood.upc,
      calories: newFood.calories,
      protein: newFood.protein,
      carbohydrates: newFood.carbohydrates,
      fat: newFood.fat,
      servingSize: newFood.servingSize,
      servingUnits: newFood.servingUnits,
      verified: newFood.verified,
    });
  }

  async findFoodByUpc(upc: string): Promise<Food> {
    return this.repo.findOne<Food>({
      where: {
        upc: upc,
      },
    });
  }

  async findVerifiedFoodByUpc(upc: string): Promise<Food> {
    return this.repo.findOne<Food>({
      where: {
        upc: upc,
        verified: true,
      },
    });
  }

  async deleteFoodByUpc(upc: string): Promise<number> {
    return this.repo.destroy({
      where: {
        upc: upc,
      },
    });
  }

  async updateFoodByUpc(foodUpdate: Food): Promise<[affectedCount: number]> {
    return this.repo.update(
      {
        title: foodUpdate.title,
        calories: foodUpdate.calories,
        protein: foodUpdate.protein,
        carbohydrates: foodUpdate.carbohydrates,
        fat: foodUpdate.fat,
        servingSize: foodUpdate.servingSize,
        servingUnits: foodUpdate.servingUnits,
        verified: foodUpdate.verified,
      },
      {
        where: {
          upc: foodUpdate.upc,
        },
      },
    );
  }

  async searchFoodsByTerm(searchTerm: string, limit: number): Promise<Food[]> {
    try {
      return await this.repo.findAll<Food>({
        where: {
          [Op.or]: [{ title: { [Op.iLike]: `%${searchTerm}%` } }],
        },
        limit: limit,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
