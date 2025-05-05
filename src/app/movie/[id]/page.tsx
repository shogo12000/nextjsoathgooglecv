'use client';

import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function Movie() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  return (
    <div>
      <h1>página Movie</h1>
      <p>ID do filme: {id}</p>
      <button
        onClick={() => router.back()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Voltar
      </button>
    </div>
  );
}