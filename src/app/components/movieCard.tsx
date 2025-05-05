"use client";
import Image from "next/image";
import { getIdMovie } from "../lib/moviActions";
import Link from "next/link";
import { useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const teste = () => {
  const resp = getIdMovie();
};



export default function MovieCard({ myMovie }: { myMovie: Movie }) {
  console.log(myMovie.id);
  const [status, setStatus] = useState("");

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    console.log("Status selecionado:", newStatus);
  
    // Aqui você pode chamar qualquer função adicional, como salvar no localStorage ou backend
  };

  return (
    <>
      <Link href={`/movie/${myMovie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w154${myMovie.poster_path}`}
          alt={myMovie.title}
          width={254}
          height={331}
          className="object-cover rounded"
        />
      </Link>
        <p className="text-xs text-center mt-1">
          {myMovie.title.length > 10
            ? myMovie.title.slice(0, 7) + "..."
            : myMovie.title}
        </p>

        <form className="text-xs mt-2 flex flex-col gap-1">
        <label>
          <input
            type="radio"
            name={`status-${myMovie.id}`}
            value="watched"
            checked={status === "watched"}
            onChange={() => handleStatusChange("watched")}
          />
          {" "}Watched
        </label>

        <label>
          <input
            type="radio"
            name={`status-${myMovie.id}`}
            value="watching"
            checked={status === "watching"}
            onChange={() => handleStatusChange("watching")}
          />
          {" "}Watching
        </label>

        <label>
          <input
            type="radio"
            name={`status-${myMovie.id}`}
            value="plan-to-watch"
            checked={status === "plan-to-watch"}
            onChange={() => handleStatusChange("plan-to-watch")}
          />
          {" "}Plan to Watch
        </label>

        <label>
          <input
            type="radio"
            name={`status-${myMovie.id}`}
            value="not-interested"
            checked={status === "not-interested"}
            onChange={() => handleStatusChange("not-interested")}
          />
          {" "}Not Interested
        </label>
      </form>
    </>
  );
}
