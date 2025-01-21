import type { PageData } from "~/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";

interface PaginationOptions {
  defaultPageSize?: number;
  defaultCurrent?: number;
}

export function usePagination<T, P extends { current: number; page_size: number }>(
  queryKey: string[] | readonly string[],
  fetchFn: (params: P) => Promise<PageData<T>>,
  initialParams: P,
  options: PaginationOptions = {},
) {
  const {
    defaultPageSize = 10,
    defaultCurrent = 1,
  } = options;

  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const [additionalParams, setAdditionalParams] = useState<P>(initialParams);

  const queryResult = useQuery({
    queryKey: [...queryKey, currentPage, defaultPageSize, additionalParams],
    queryFn: () => fetchFn({ ...additionalParams, current: currentPage, page_size: defaultPageSize }),
    placeholderData: keepPreviousData,
  });

  const { data, isPlaceholderData } = queryResult;

  const goToPage = useCallback(
    (page: number) => {
      if (!isPlaceholderData) {
        setCurrentPage(page);
      }
    },
    [isPlaceholderData],
  );

  const loadMore = useCallback(() => {
    if (!isPlaceholderData && data?.pagination.has_next) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  }, [data, isPlaceholderData]);

  const updateParams = useCallback(
    (newParams: Partial<P>) => {
      setAdditionalParams(prevParams => ({ ...prevParams, ...newParams }));
    },
    [],
  );
  const totalPages = Math.ceil((data?.pagination.total ?? 0) / (data?.pagination.page_size ?? defaultPageSize));
  return {
    ...queryResult,
    data: data?.list ?? [],
    pagination: {
      current: data?.pagination.current ?? currentPage,
      pageSize: data?.pagination.page_size ?? defaultPageSize,
      total: data?.pagination.total ?? 0,
      hasNext: data?.pagination.has_next ?? false,
      totalPages,
    },
    loadMore,
    goToPage,
    updateParams,
  };
}
