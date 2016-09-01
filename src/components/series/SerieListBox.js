import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const SerieListBox = ({serie, onChange}) => {
  return (
    <div className="meta-item">

      <div href="" className ="meta-link" data-toggle="modal">
        <div className="meta-hover">
          <div className="meta-hover-content">
            <div>

              <span className="fa-stack">
                <i className="fa fa-play-circle-o fa-stack-2x"></i>
              </span>
            </div>
            <br/>
            <div className=""><span>  {serie.name} </span> </div>
            <br/>
            <div className="text-center">
              <span> <i className="fa fa-star" aria-hidden="true"></i></span> &nbsp; <span>{serie.imdbRating}</span>
            </div>
          </div>
        </div>
        <span className="fa-stack fav-mark" onClick={(event) => onChange(event, serie) }>
          <i className={serie.checked ? "fa fa-check-square-o fa-stack-2x" : "fa fa-square-o fa-stack-2x"}></i>
        </span>
        <p className="vignette">
          <img src={serie.poster} onClick={onChange} className="img-responsive img-centered img-full-width" alt=""/>
        </p>

      </div>
    </div>
  );
};

SerieListBox.propTypes = {
  serie: PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired
};

export default SerieListBox;
