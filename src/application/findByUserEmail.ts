import DrivingPort from "../domain/DrivingPort";
import DatabasePort from "../domain/port/DatabasePort";
import Users from "../infrastructure/knex/models/Users";

class FindByUserEmail implements DrivingPort<Users, Users | undefined> {
    private userCollection: DatabasePort;

    constructor(userCollection: DatabasePort) {
        this.userCollection = userCollection;
    }

    async execute(user: Users): Promise<Users | undefined> {
        const { email } = user;
        return await this.userCollection.findByEmail(email);
    }
}

export default FindByUserEmail;