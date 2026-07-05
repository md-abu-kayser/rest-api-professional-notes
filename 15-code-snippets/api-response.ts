export function apiResponse(success: boolean, data: any, message = "") {
  return { success, data, message };
}
