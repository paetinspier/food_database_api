import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodModel } from './models/food.model';
import { Food } from './models/food.entity';

@Controller('food')
export class FoodController {
  constructor(private readonly service: FoodService) {}

  @Post('/create')
  public async createFood(@Body() food: FoodModel): Promise<Food> {
    return this.service.createFood(food);
  }

  @Get('/:upc')
  public async getFoodByUpc(@Param() params): Promise<Food> {
    console.log('upc', params.upc);
    return this.service.findFoodByUpc(params.upc);
  }

  @Get('verified/:upc')
  public async getVerifiedUpc(@Param() params): Promise<Food> {
    return this.service.findVerifiedFoodByUpc(params.upc);
  }

  @Get('/search/:searchTerm/:limit')
  public async searchFood(@Param() params): Promise<Food[]> {
    try {
      console.log('Search term', params.searchTerm);
      let result = await this.service.searchFoodsByTerm(params.searchTerm, params.limit);
      console.log('result', result)
      return result
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
