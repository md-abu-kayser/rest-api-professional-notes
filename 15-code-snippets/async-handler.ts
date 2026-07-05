export const asyncHandler = (fn: any) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
