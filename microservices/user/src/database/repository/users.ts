import { NewUser, User, users } from "../models/users";
import { db } from "../db";
import { sql } from "drizzle-orm";

export const getUsers = async () => {
  return await db
    .select({
      id: users.id,
      username: users.username,
      email: users.email
    })
    .from(users);
};

export const getUserEmail = async (email: string) => {
  return await db
    .select()
    .from(users)
    .where(sql`${users.email} = ${email}`);
};

export const createUser = async (newUser: NewUser) => {
  return await db
    .insert(users)
    .values(newUser)
    .returning({ id: users.id, username: users.username, email: users.email });
};

export const updatUserByIdAndEmail = async (id: number, updatedUser: User) => {
  return await db
    .update(users)
    .set(updatedUser)
    .where(sql`${users.id} = ${id}`)
    .returning({ id: users.id, username: users.username, email: users.email });
};
