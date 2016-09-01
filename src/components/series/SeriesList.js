import React, {PropTypes} from 'react';
import SerieListBox from './SerieListBox';

const SeriesList = ({series, onChange}) => {
  return (
    <div  className="metas-list-container">
      <div className="row">
        {series.map(serie =>
          <SerieListBox key={serie.imdb_id} serie={serie} onChange={onChange}/>
        )}
      </div>
    </div>
  );
};

SeriesList.propTypes = {
  series: PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SeriesList;
