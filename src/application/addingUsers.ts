import DrivingPort from "../domain/DrivingPort";
import Users from "../infrastructure/knex/models/Users";
import DatabasePort from "../domain/port/DatabasePort";

class AddingUsers implements DrivingPort<Users, void> {
    private userCollection: DatabasePort;

    constructor(userCollection: DatabasePort) {
        this.userCollection = userCollection;
    }

    async execute(user: Users): Promise<void> {
        this.userCollection.add(user);
    }
}

export default AddingUsers;