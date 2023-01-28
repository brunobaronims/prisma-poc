import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as env from 'env-var';

import sessionRepository from "../../data/repositories/sessionRepository";
import userRepository from "../../data/repositories/userRepository";
import { exclude } from "../../utils/prisma-utils";
import { SignInParams, SignInResult } from "../types";

async function signIn(params: SignInParams): Promise<SignInResult> {
    const { email, password } = params;

    const user = await userRepository.findUserByEmail(email);
    if (!user)
        throw new Error();
    const id = user.id;

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid)
        throw new Error();

    const secret: string = env.get('JWT_SECRET').required().asString();
    const token = jwt.sign({ id }, secret);
    await sessionRepository.create({
        token: token,
        userId: id
    });

    return {
        user: exclude(user, "password"),
        token,
    };
}

const authService = {
    signIn
};

export default authService;