import type { ITouchEvent } from "@tarojs/components";
import { View } from "@tarojs/components";
import { memo, useCallback, useMemo } from "react";

interface PaginationProps {
  current: number; // 当前页码
  count: number; // 总页数
  onChange: (page: number) => void; // 页码更改时的回调函数
}

const Pagination = memo(({ current, count, onChange }: PaginationProps) => {
  /**
   * 计算可见页码
   * @returns 可见页码数组
   */
  const getVisiblePages = useCallback((): (string | number)[] => {
    const range = 2;
    const start = Math.max(1, current - range);
    const end = Math.min(count, current + range);
    const pages: (string | number)[] = [];

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (start > 1) {
      if (start > 2) {
        pages.unshift("...");
      }
      pages.unshift(1);
    }

    if (end < count) {
      if (end < count - 1) {
        pages.push("...");
      }
      pages.push(count);
    }

    return pages;
  }, [current, count]);

  const visiblePages = useMemo(() => getVisiblePages(), [getVisiblePages]);

  const handlePrevClick = useCallback((_: ITouchEvent) => {
    if (current > 1) {
      onChange(current - 1);
    }
  }, [current, onChange]);

  const handleNextClick = useCallback((_: ITouchEvent) => {
    if (current < count) {
      onChange(current + 1);
    }
  }, [current, count, onChange]);

  const handlePageClick = useCallback((page: string | number) => (_: ITouchEvent) => {
    if (typeof page === "number") {
      onChange(page);
    }
  }, [onChange]);

  return (
    <View className="flex items-center justify-center gap-2 py-2">
      <View
        className={`rounded-full p-2 flex items-center justify-center w-8 h-8 will-change-transform ${
          current === 1
            ? "text-gray-300"
            : "text-primary-5"
        }`}
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={handlePrevClick}
      >
        <View className="i-tabler-chevron-left" />
      </View>

      {visiblePages.map((page, index) => (
        <View
          key={index}
          className={`rounded-full px-3 py-2 text-sm will-change-transform ${
            page === current
              ? "bg-primary-5 text-white"
              : typeof page === "number"
                ? "text-gray-700 hover:bg-gray-200 "
                : "text-gray-400"
          }`}
          style={{
            transform: "translate3d(0, 0, 0)",
            transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onClick={handlePageClick(page)}
        >
          {page}
        </View>
      ))}

      <View
        className={`rounded-full p-2 flex items-center justify-center w-8 h-8 will-change-transform ${
          current === count
            ? "text-gray-300"
            : "text-primary-5"
        }`}
        style={{
          transform: "translate3d(0, 0, 0)",
          transition: "transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onClick={handleNextClick}
      >
        <View className="i-tabler-chevron-right" />
      </View>
    </View>
  );
}, (prevProps, nextProps) => {
  return (
    prevProps.current === nextProps.current
    && prevProps.count === nextProps.count
  );
});

Pagination.displayName = "Pagination";

export default Pagination;
