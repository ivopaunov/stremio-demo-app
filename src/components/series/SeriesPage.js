import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as seriesActions from '../../actions/seriesActions';
import SeriesList from './SeriesList';
import {browserHistory} from 'react-router';

class SeriesPage extends React.Component {
  constructor(props, context) {
    super(props, context);   
    this.updateSerieState = this.updateSerieState.bind(this);
  }

  updateSerieState(event, serie) {
    event.preventDefault();
    this.props.actions.toggleSeriesChecked(serie);
  }

  render() {
    const {series} = this.props;

    return (
      <div>
        <SeriesList
          series={series}
          onChange={this.updateSerieState}/>
      </div>
    );
  }
}


SeriesPage.propTypes = {
  series: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    series: state.series
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(seriesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SeriesPage);
