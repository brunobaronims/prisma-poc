import { CreateUserParams } from "../types";
import userRepository from "../../data/repositories/userRepository";

async function createUser({ name, email, password }: CreateUserParams) {
    const userExists = await userRepository.findUserByEmail(email);
    if (userExists)
        throw new Error();

    return userRepository.registerUser(name, email, password);
};

const userService = {
    createUser
};

export default userService;