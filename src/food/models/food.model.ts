

export class FoodModel {
    title: string;
    upc: string;
    calories: number;
    protein: number;
    carbohydrates: number;
    fat: number;
    servingSize: number;
    servingUnits: number;
    verified: boolean;
}

export enum ServingSizeUnits{
	GRAMS = 0,
	MILLILITER = 1,
	OUNCES = 3,
}