export const HTTP_STATUS = {
  badRequest: 400,
  unprocessable: 422,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  tooManyRequests: 429,
  serverError: 500,
} as const;

export function isSuccessful(status: number) {
  return status >= 200 && status < 300;
}

export function isServerError(status: number) {
  return status >= 500;
}
