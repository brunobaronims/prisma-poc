import { prisma } from "../../config/database";

async function findUserByEmail(email: string) {
    const userExists = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    return userExists;
};

async function registerUser(name: string, email: string, password: string) {
    return prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
};

const userRepository = {
    findUserByEmail,
    registerUser
};

export default userRepository;