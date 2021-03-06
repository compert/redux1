import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">Courses</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
      <LoadingDots interval={100} dots={20} loading={loading} />
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
