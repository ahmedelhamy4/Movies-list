export interface MoviesQueryParams {
  skip?: number;
  limit?: number;
  query?: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
}

export interface PaginatedMoviesResponse {
  total: number;
  items: Movie[];
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export interface HTTPValidationError {
  detail: ValidationError[];
}
