import { Request, Response } from "express";

import AddingUsers from "../../application/addingUsers";
import AllUsers from "../../application/allUsers";
import FindByUserEmail from "../../application/findByUserEmail";
import UserInMemoryAdapter from "../../adapter/UserInMemoryAdapter";
import UserKnexAdapter from "../../adapter/UserKnexAdapter";

// const userAdapter = new UserInMemoryAdapter();
const userAdapter = new UserKnexAdapter();

class UserController {
    async add(req: Request, res: Response) {
        const addingUsers = new AddingUsers(userAdapter);
        await addingUsers.execute(req.body);
        res.status(200).json({ message: "sucesso ao salvar usuário" });
    }
    
    async all(req: Request, res: Response) {
        const allUsers = new AllUsers(userAdapter);
        const users = await allUsers.execute();
        res.status(200).json({ users, message: "retorno da busca por todos os usuário" });
    }
    
    async findByEmail(req: Request, res: Response) {
        const findByEmail = new FindByUserEmail(userAdapter);
        const user = await findByEmail.execute(req.body);
        res.status(200).json({ user, message: "retorno da busca por email do usuário" });
    }
}

export default UserController;