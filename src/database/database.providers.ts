import { Sequelize } from "sequelize-typescript";
import { DailyIntake } from "src/daily_intake/models/daily_intake.entity";
import { Food } from "src/food/models/food.entity";
import { User } from "src/user/models/user.entity";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'paetin',
                password: '0329',
                database: 'nutrition_db',
            });
            sequelize.addModels([Food, User, DailyIntake]);
            await sequelize.sync();
            return sequelize;

        }
    }
]
