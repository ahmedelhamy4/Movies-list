import { MoviesQueryParams, PaginatedMoviesResponse } from '../interfaces';

const API_URL = 'https://november7-730026606190.europe-west1.run.app';

export const fetchMovies = async (
  queryParams: MoviesQueryParams,
): Promise<PaginatedMoviesResponse> => {
  const { skip, limit, query } = queryParams;
  const urlParams = new URLSearchParams();

  if (skip !== undefined) urlParams.append('skip', skip.toString());
  if (limit !== undefined) urlParams.append('limit', limit.toString());
  if (query) urlParams.append('query', query);

  const url = `${API_URL}/movies/?${urlParams.toString()}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const res: PaginatedMoviesResponse = await response.json();
    return res;
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
};
