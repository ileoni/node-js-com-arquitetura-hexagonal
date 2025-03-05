import Users from "../../infrastructure/knex/models/Users";

interface DatabasePort {
    add(user: Users): Promise<void>;
    all(): Promise<Users[]>;
    findByEmail(email: String): Promise<Users | undefined>;
}

export default DatabasePort;