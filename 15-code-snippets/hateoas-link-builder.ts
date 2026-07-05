export interface HateoasLink {
  rel: string;
  href: string;
  method: string;
  title?: string;
}

export function buildResourceLinks(
  baseUrl: string,
  resourceId: string,
): HateoasLink[] {
  return [
    {
      rel: "self",
      href: `${baseUrl}/${resourceId}`,
      method: "GET",
      title: "Get this resource",
    },
    {
      rel: "update",
      href: `${baseUrl}/${resourceId}`,
      method: "PUT",
      title: "Update this resource",
    },
    {
      rel: "delete",
      href: `${baseUrl}/${resourceId}`,
      method: "DELETE",
      title: "Delete this resource",
    },
  ];
}

export function addLinksToResponse<T extends Record<string, any>>(
  data: T,
  links: HateoasLink[],
): T & { _links: HateoasLink[] } {
  return { ...data, _links: links };
}
