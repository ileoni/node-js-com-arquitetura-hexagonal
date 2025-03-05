import { Knex } from "knex";
import { hashSync } from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            email: "admin@admin.com",
            password: hashSync("12345678", 10),
            role: "admin"
        }
    ]);
};
