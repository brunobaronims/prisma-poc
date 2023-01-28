import { prisma } from "../../config/database";

async function findUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: {
            email: email
        }
    })
};

async function registerUser(name: string, email: string, password: string) {
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    
    return user;
};

const userRepository = {
    findUserByEmail,
    registerUser
};

export default userRepository;