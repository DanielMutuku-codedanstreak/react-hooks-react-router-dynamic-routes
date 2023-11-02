import React from 'react';
import { useParams } from 'react-router-dom';

export default function MovieShow({ movies }) {
  const params = useParams();
  //console.log('params:', params);
  if (!params || !params.movieId || !movies[params.movieId]) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}
