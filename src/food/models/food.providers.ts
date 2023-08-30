import { Food } from './food.entity';

export const foodProviders = [
  {
    provide: 'FOOD_REPOSITORY',
    useValue: Food,
  },
];
