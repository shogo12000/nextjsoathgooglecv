"use server";
import { apiMovies } from "@/app/lib/moviActions";
import Pagination from "../../components/pagination";

const fetchMovies = async (page: number) => {
  const resp = await apiMovies(page);
  console.log(resp);
  const total_pages = resp?.total_pages;
  const server_page = resp?.page;
  const results = resp?.results || [];
  console.log(results);

  return { resp, total_pages, server_page, results };
};

export default async function Movies({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const n = parseInt(searchParams.page || "1", 10);
  let page = 0;
  if (n) {
    page = n;
  }
  // const page = parseInt(  searchParams.page || "1", 10);
  const { total_pages, server_page, results } = await fetchMovies(page);

  return (
    <div className="flex flex-col items-center p-2">
      <h1>PAGE MOVIES</h1>
      <ul className="grid gap-2 grid-cols-4 sm:max-w-[900px] md:grid-cols-5">
        {results.map((movie: any) => (
          <li key={movie.id} className="w-full">
            <img
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[80%] object-cover rounded"
            />
            <p className="xs-paragraph sm:text-9xl text-center mt-1">
              {movie.title.length > 10
                ? movie.title.slice(0, 7) + "..."
                : movie.title}
            </p>
          </li>
        ))}
      </ul>

      {/* Agora usa o componente client */}
      <Pagination currentPage={server_page} totalPages={total_pages} />
 
    </div>
  );
}
