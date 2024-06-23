"use client";

import { Pagination } from "@nextui-org/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagin({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div>
      <Pagination
        total={totalPages}
        initialPage={currentPage}
        onChange={(e) => {
          replace(createPageURL(e), { scroll: false });
        }}
      />
    </div>
  );
}
