import DrivingPort from "../domain/DrivingPort";
import DatabasePort from "../domain/port/DatabasePort";
import Users from "../infrastructure/knex/models/Users";

class AllUsers implements DrivingPort<null, Users[]> {
    private userCollection: DatabasePort;

    constructor(userCollection: DatabasePort) {
        this.userCollection = userCollection;
    }

    async execute(): Promise<Users[]> {
        const user = await this.userCollection.all();
        return user;
    }
}

export default AllUsers;