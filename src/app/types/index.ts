import { NextFunction, Request, Response } from "express";
import { Book, User } from "@prisma/client";

export type ValidationMiddleware = (req: Request, res: Response, next: NextFunction)=> void;
export type PostBookParams = Omit<Book, "id" | "userId" | "User">;
export type CreateUserParams = Omit<User, "id">