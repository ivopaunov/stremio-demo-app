import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Stremio demo app</h1>
        <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
        <Link to="/movies" activeClassName="active">Movies</Link>
        {" | "}
        <Link to="/series" activeClassName="active">Series</Link>
        {" | "}
        <Link to="/channels" activeClassName="active">Channels</Link>
      </div>
    );
  }
}

export default HomePage;
