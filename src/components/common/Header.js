import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav id="mainNav" className="navbar navbar-default navbar-custom navbar-fixed-top">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-public">
          <span className="sr-only">Toggle navigation</span><i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbar-collapse-public">
        <ul className="nav navbar-nav ">
          <li >
            <IndexLink to="/movies" activeClassName="active">Movies</IndexLink>
          </li>
          <li >
            <Link to="/series" activeClassName="active">Series</Link>
          </li>
          <li>
            <Link to="/channels" activeClassName="active">Channels</Link>
          </li>         
        </ul>
      </div>
    </nav>  
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
