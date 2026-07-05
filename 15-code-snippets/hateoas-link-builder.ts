export function buildLinks(baseUrl: string, id: string) {
  return {
    self: `${baseUrl}/${id}`,
    update: `${baseUrl}/${id}`,
    delete: `${baseUrl}/${id}`,
  };
}
