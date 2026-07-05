import { Response } from "express";

interface SuccessResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, any>;
}

interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  statusCode = 200,
  meta?: Record<string, any>,
) {
  const body: SuccessResponse<T> = { success: true, data };
  if (meta) body.meta = meta;
  res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  statusCode: number,
  message: string,
  code = "UNKNOWN_ERROR",
  details?: any,
) {
  const body: ErrorResponse = {
    success: false,
    error: { code, message },
  };
  if (details) body.error.details = details;
  res.status(statusCode).json(body);
}
