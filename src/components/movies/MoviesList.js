import React, {PropTypes} from 'react';
import MovieListBox from './MovieListBox';

const MoviesList = ({movies, onChange}) => {
  return (
    <div  className="metas-list-container">
      <div className="row">
        {movies.map(movie =>
          <MovieListBox key={movie.imdb_id} movie={movie} onChange={onChange}/>
        )}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default MoviesList;
