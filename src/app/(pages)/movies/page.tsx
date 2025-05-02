import { apiMovies } from "@/app/lib/moviActions";
import Pagination from "../../components/pagination";
import Image from "next/image";

const fetchMovies = async (page: number) => {
  const resp = await apiMovies(page);
  const total_pages = resp?.total_pages;
  const server_page = resp?.page;
  const results = resp?.results || [];
  return { resp, total_pages, server_page, results };
};

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MoviesPageProps {
  searchParams?: { page?: string }; // Ajustando a tipagem para o searchParams
}

export default async function Movies({
  searchParams,
}: MoviesPageProps) {
  const n = parseInt(searchParams?.page || "1", 10);
  const page = isNaN(n) ? 1 : n;

  const { total_pages, server_page, results } = await fetchMovies(page);

  return (
    <div className="flex flex-col items-center p-2">
      <h1>PAGE MOVIES</h1>
      <ul className="grid gap-2 grid-cols-4 sm:max-w-[900px] md:grid-cols-5">
        {results.map((movie: Movie) => (
          <li key={movie.id} className="w-full">
            <Image
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
              width={254}
              height={331}
              className="object-cover rounded"
            />
            <p className="text-xs text-center mt-1">
              {movie.title.length > 10
                ? movie.title.slice(0, 7) + "..."
                : movie.title}
            </p>
          </li>
        ))}
      </ul>

      <Pagination currentPage={server_page} totalPages={total_pages} />
    </div>
  );
}
