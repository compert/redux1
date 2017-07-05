import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>React Test Page</h1>
        <p>react test</p>
        <Link to="about">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
