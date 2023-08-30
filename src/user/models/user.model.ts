import { User } from "./user.entity";

export class UserModel{
    id?: number;
    uid: string;
    first_name: string;
    last_name: string;
    email: string;
    isDiabetic: boolean;

    static fromEntity(entity: User): UserModel{
        let user = new UserModel();

        user.id = entity.id;
        user.uid = entity.uid;
        user.first_name = entity.first_name;
        user.last_name = entity.last_name;
        user.email = entity.email;
        user.isDiabetic = entity.isDiabetic;

        return user;
    }
}