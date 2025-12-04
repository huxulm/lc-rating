import { Button } from "@/components/ui-customized/button";
import { Input } from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";

interface PageJumperProps {
  pageIndex: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

const PageJumper = React.memo(
  ({ pageIndex, pageCount, onPageChange }: PageJumperProps) => {
    const [localPage, setLocalPage] = useState((pageIndex + 1).toString());

    const parsedPage = parseInt(localPage);

    useEffect(() => {
      setLocalPage((pageIndex + 1).toString());
    }, [pageIndex]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalPage(e.target.value);
      },
      []
    );

    const jump = useCallback(() => {
      if (!isNaN(parsedPage) && parsedPage > 0 && parsedPage <= pageCount) {
        onPageChange(parsedPage - 1);
      }
    }, [parsedPage, onPageChange, pageCount]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          jump();
        }
      },
      [jump]
    );

    return (
      <div className="flex flex-row items-center justify-center gap-2">
        <Input
          type="number"
          max={pageCount}
          value={localPage}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-1/3"
        />
        <Button
          onClick={jump}
          disabled={parsedPage < 1 || parsedPage > pageCount}
        >
          <span>跳转</span>
        </Button>
      </div>
    );
  }
);

PageJumper.displayName = "PageJumper";
export { PageJumper };
