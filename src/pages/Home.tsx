import { useEffect, useState } from 'react';
import { Movie } from '../interfaces';
import { fetchMovies } from '../utils';
import { MoviesTable } from '../components';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(0);
  const [moviesCount, setMoviesCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pageSize, setPageSize] = useState(10);

  const fetchMoviesData = async () => {
    setIsLoading(true);
    try {
      const limit = pageSize;
      const skip = page * limit;
      const result = await fetchMovies({ skip, limit });
      setMovies(result.items);
      setMoviesCount(result.total);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoviesData();
  }, [page, pageSize]);

  return (
    <div>
      <h1>Movies List</h1>
      <MoviesTable
        movies={movies}
        loading={isLoading}
        total={moviesCount}
        currentPage={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default Home;
