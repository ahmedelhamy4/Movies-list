import React from 'react';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { Movie } from '../interfaces';

interface MoviesTableProps {
  loading: boolean;
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  movies: Movie[];
}

export const MoviesTable: React.FC<MoviesTableProps> = ({
  movies,
  loading,
  total,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Title',
      width: 250,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 400,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 100,
    },
    {
      field: 'image_url',
      headerName: 'Image',
      width: 150,
      renderCell: (params) => (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img
            src={params.value}
            alt={params.row.title}
            style={{
              width: 'auto',
              height: '100%',
              maxHeight: '150px',
              objectFit: 'contain',
              borderRadius: '8px',
            }}
          />
        </div>
      ),
    },
  ];

  const rows = movies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    description: movie.description,
    rating: movie.rating,
    image_url: movie.image_url,
  }));

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pagination
        paginationMode="server"
        rowCount={total}
        pageSizeOptions={[5, 10, 15]}
        paginationModel={{
          pageSize: pageSize,
          page: currentPage,
        }}
        onPaginationModelChange={(model: GridPaginationModel) => {
          onPageChange(model.page);
          onPageSizeChange(model.pageSize);
        }}
      />
    </div>
  );
};
