import Users from "../infrastructure/knex/models/Users";
import DatabasePort from "../domain/port/DatabasePort";

class UserInMemoryAdapter implements DatabasePort {
    private static users: Users[] = [];
    
    async add(user: Users): Promise<void> {
        UserInMemoryAdapter.users.push(user);
    }
    
    async all(): Promise<Users[]> {
        const users = UserInMemoryAdapter.users;
        return users;
    }
    
    async findByEmail(email: String): Promise<Users | undefined> {
        const user = UserInMemoryAdapter.users.find(user => user.email === email);
        return user;
    }
}

export default UserInMemoryAdapter;