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