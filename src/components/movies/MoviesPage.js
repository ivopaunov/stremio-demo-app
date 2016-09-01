import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/moviesActions';
import MoviesList from './MoviesList';
import {browserHistory} from 'react-router';

class MoviessPage extends React.Component {
  constructor(props, context) {
    super(props, context); 
    this.updateMovieState = this.updateMovieState.bind(this);
  }

  updateMovieState(event, movie) {
    event.preventDefault();
    this.props.actions.toggleMovieChecked(movie);
  }

  render() {
    const {movies} = this.props;

    return (
      <div>
        <MoviesList
          movies={movies}
          onChange={this.updateMovieState}/>
      </div>
    );
  }
}

MoviessPage.propTypes = {
  movies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(moviesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviessPage);
