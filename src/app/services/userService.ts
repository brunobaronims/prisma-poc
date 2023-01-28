import bcrypt from 'bcrypt';

import { CreateUserParams } from "../types";
import userRepository from "../../data/repositories/userRepository";

async function createUser({ name, email, password }: CreateUserParams) {
    const userExists = await userRepository.findUserByEmail(email);
    if (userExists)
        throw new Error();
    const hashedPassword = await bcrypt.hash(password, 12);

    return userRepository.registerUser(name, email, hashedPassword);
};

const userService = {
    createUser
};

export default userService;