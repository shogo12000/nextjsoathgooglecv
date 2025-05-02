// components/Pagination.tsx
'use client';

import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChangePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`/movies?${params.toString()}`);
  };

  return (
    <div className="flex gap-2 items-center">
      {currentPage > 1 && (
        <button onClick={() => handleChangePage(currentPage - 1)}>Back</button>
      )}
      <span className="text-xs">Page {currentPage}</span>
      {currentPage < totalPages && (
        <button onClick={() => handleChangePage(currentPage + 1)}>Next</button>
      )}
    </div>
  );
}
