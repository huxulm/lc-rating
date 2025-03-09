import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeftIcon } from "lucide-react";
import React, { useCallback } from "react";
import { PageJumper } from "./PageJumper";
import { PageResizer } from "./PageResizer";

interface PaginationControlsProps {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

const PageControl = React.memo(
  ({
    pageIndex,
    pageCount,
    onPageChange,
    onPageSizeChange,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
  }: PaginationControlsProps) => {
    const handleSelectChange = useCallback(
      (value: number) => onPageSizeChange(value),
      [onPageSizeChange]
    );

    const handlePrevClick = useCallback(() => {
      if (canPreviousPage) {
        previousPage();
      }
    }, [canPreviousPage, previousPage]);

    const handleNextClick = useCallback(() => {
      if (canNextPage) {
        nextPage();
      }
    }, [canNextPage, nextPage]);

    return (
      <div className="flex gap-4 flex-col md:flex-row items-center justify-between">
        <div className="flex flex-row justify-center items-center space-x-2">
          <span className="text-sm text-muted-foreground text-nowrap">
            每页显示
          </span>
          <PageResizer
            options={[20, 30, 50, 100, 200]}
            onValueChange={handleSelectChange}
          />
        </div>
        <Pagination className="w-fit">
          <PaginationContent className="flex items-center gap-2">
            <PaginationItem>
              <PaginationLink
                onClick={handlePrevClick}
                isActive={canPreviousPage}
                aria-label="Go to previous page"
                size="default"
                className="gap-1 px-2.5 sm:pl-2.5"
              >
                <ChevronLeftIcon />
                <span className="hidden sm:block">上一页</span>
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <span>第 {`${pageIndex + 1} / ${pageCount}`} 页</span>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                onClick={handleNextClick}
                isActive={canNextPage}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <PageJumper
          pageIndex={pageIndex}
          pageCount={pageCount}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
);

PageControl.displayName = "PageControl";
export { PageControl };
