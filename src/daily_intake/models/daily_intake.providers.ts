import { DailyIntake } from "./daily_intake.entity";

export const dailyIntakeProviders = [
    {
        provide: 'DAILY_INTAKE_REPOSITORY',
        useValue: DailyIntake,
    }
]