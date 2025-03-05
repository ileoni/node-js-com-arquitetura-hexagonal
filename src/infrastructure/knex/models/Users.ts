import { Model } from "objection";

class Users extends Model {
    id?: Number;
    email!: String;
    password!: String;
    role!: String;

    static tableName: string = "users";
}

export default Users;