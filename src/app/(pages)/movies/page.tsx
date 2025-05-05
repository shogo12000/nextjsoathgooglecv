import { apiMovies } from "@/app/lib/moviActions";
import Pagination from "../../components/pagination";
 
import MovieCard from "@/app/components/movieCard";

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
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Movies({
  searchParams,
}: MoviesPageProps) {
  const resolvedSearchParams = await searchParams;
  const pageParam = resolvedSearchParams.page;
  const n = parseInt(Array.isArray(pageParam) ? pageParam[0] : pageParam || "1", 10);
  const page = isNaN(n) ? 1 : n;

  const { total_pages, server_page, results } = await fetchMovies(page);

  return (
    <div className="flex flex-col items-center p-2">
      <h1>PAGE MOVIES</h1>
      <ul className="grid gap-2 grid-cols-2 sm:max-w-[900px] sm:grid-cols-4 md:grid-cols-5">
        {results.map((movie: Movie) => (
          <li key={movie.id} className="w-full">
            <MovieCard myMovie={movie}/>
          </li>
        ))}
      </ul>

      <Pagination currentPage={server_page} totalPages={total_pages} />
    </div>
  );
}