export type PaginationMeta = {
   page: number;
   pageSize: number;
   totalItems: number;
   totalPages: number;
   hasNextPage: boolean;
   hasPreviousPage: boolean;
};

export type PaginationMetaParams = {
   page: number;
   pageSize: number;
   totalItems: number;
};

export const buildPaginationMeta = ({
   page,
   pageSize,
   totalItems,
}: PaginationMetaParams): PaginationMeta => {
   const safePageSize = Math.max(1, Math.floor(pageSize));
   const safeTotalItems = Math.max(0, Math.floor(totalItems));
   const totalPages = Math.ceil(safeTotalItems / safePageSize);
   const safePage =
      totalPages === 0
         ? 1
         : Math.min(totalPages, Math.max(1, Math.floor(page)));

   return {
      page: safePage,
      pageSize: safePageSize,
      totalItems: safeTotalItems,
      totalPages,
      hasNextPage: safePage < totalPages,
      hasPreviousPage: safePage > 1,
   };
};
