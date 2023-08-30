import { Column, Model, Table } from "sequelize-typescript";
import { UserModel } from "./user.model";

@Table
export class User extends Model{
    @Column({
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @Column
    uid: string;

    @Column
    first_name: string;

    @Column
    last_name: string;

    @Column
    email: string;

    @Column
    isDiabetic: boolean;

    static fromModel(user: UserModel): User{
        let entity = new User();

        entity.uid = user.uid;
        entity.first_name = user.first_name;
        entity.last_name = user.last_name;
        entity.email = user.email;
        entity.isDiabetic = user.isDiabetic;

        return entity;
    }
}