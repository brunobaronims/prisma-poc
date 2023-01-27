import { Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../../app/services/userService";

export async function postUser(req: Request, res: Response) {
    const {
        email,
        password,
        name
    } = req.body;

    try {
        await userService.createUser({ email, password, name });
        return res.sendStatus(httpStatus.CREATED);
    } catch (e) {
        return res.status(httpStatus.BAD_REQUEST).send(e);
    }
};