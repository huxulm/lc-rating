import { Skeleton } from "@/components/ui/skeleton";
import { DataTable } from "./DataTable";
import { TableCol } from "./types";

interface ProblemsTableProps {
  tableData: TableCol[];
  isPending: boolean;
}

export function ProblemsTable({ tableData, isPending }: ProblemsTableProps) {
  return (
    <div className="rounded-md border">
      {isPending ? (
        <div className="space-y-2 p-4">
          <Skeleton className="h-8 w-1/1" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-5/6" />
          <Skeleton className="h-8 w-4/5" />
          <Skeleton className="h-8 w-1/1" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-8 w-5/6" />
          <Skeleton className="h-8 w-4/5" />
        </div>
      ) : (
        <>
          <DataTable data={tableData} />
        </>
      )}
    </div>
  );
}
