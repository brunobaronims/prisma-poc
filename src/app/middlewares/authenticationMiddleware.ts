import { NextFunction, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import * as env from 'env-var';

import { unauthorizedError } from "../errors/unauthorizedError";
import { prisma } from "../../config/database";
import { AuthenticatedRequest, JWTPayload } from "../types";

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.header("Authorization");
  if (!authHeader) return generateUnauthorizedResponse(res);

  const token = authHeader.split(" ")[1];
  if (!token) return generateUnauthorizedResponse(res);

  const secret: string = env.get('JWT_SECRET').required().asString();

  try {
    const { userId } = jwt.verify(token, secret) as JWTPayload;

    const session = await prisma.session.findFirst({
      where: {
        token,
      },
    });
    if (!session) return generateUnauthorizedResponse(res);

    req.userId = userId;

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
};

function generateUnauthorizedResponse(res: Response) {
    res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
  }