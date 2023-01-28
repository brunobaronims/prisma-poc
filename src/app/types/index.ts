import { NextFunction, Request, Response } from "express";
import { Book, User } from "@prisma/client";

export type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;

export type CreatedBookParams = Omit<Book, "id">;

export type UpdatedBookParams = Pick<CreatedBookParams, "startedAt" | "finishedAt">

export type CreateUserParams = Omit<User, "id">

export type SignInParams = Pick<User, "email" | "password">;

export type SignInResult = {
    user: Pick<User, "id" | "email">;
    token: string;
};

export type JWTPayload = {
    id: number;
};
export type AuthenticatedRequest = Request & JWTPayload;

export type ApplicationError = {
    name: string;
    message: string;
};

export type RequestError = {
    status: number,
    data: object | null,
    statusText: string,
    name: string,
    message: string,
};
