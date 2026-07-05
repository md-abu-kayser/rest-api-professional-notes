export interface PaginationQuery {
  page?: number;
  limit?: number;
  cursor?: string;
}

export interface PaginationMeta {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  nextCursor?: string | null;
}

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export function paginate<T>(
  items: T[],
  total: number,
  query: PaginationQuery,
): PaginatedResult<T> {
  const page = Math.max(query.page || 1, 1);
  const limit = Math.min(Math.max(query.limit || 10, 1), 100);
  const totalPages = Math.ceil(total / limit);
  return {
    data: items,
    meta: {
      totalItems: total,
      itemsPerPage: limit,
      currentPage: page,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1,
      nextCursor: null,
    },
  };
}
