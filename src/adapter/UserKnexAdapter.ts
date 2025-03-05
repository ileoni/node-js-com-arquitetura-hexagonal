import DatabasePort from "../domain/port/DatabasePort";
import Users from "../infrastructure/knex/models/Users";

class UserKnexAdapter implements DatabasePort {
    async add(user: Users): Promise<void> {
        const users = await Users.query().insert(user);
        console.log(users);
    }
    
    async all(): Promise<Users[]> {
        const users = await Users.query().select("*");
        return users;
    }
    async findByEmail(email: String): Promise<Users | undefined> {
        const users = await Users.query().where({ email }).first();
        return users;
    }

}

export default UserKnexAdapter;