const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`
    },
};

export const apiMovies = async (page: number) => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=${page}`;

    try {
        const resp = await fetch(url, options)
        const data = await resp.json();

        return data;
    } catch (err) {
        console.error("Erro ao buscar filmes:", err);
        return null;
    }
};

export const getIdMovie = async () => {
    const url = 'https://api.themoviedb.org/3/movie/986056?language=en-US'; 
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log("Filme:", data);
      return data;
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
      return null;
    }
};