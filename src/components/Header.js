import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUserData } from '../redux/actionCreators';

class Header extends Component {
  componentDidMount() {
    this.props.getUserData(1);
  }

  render() {
    const { user } = this.props;

    return (
      <nav id="head" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Все задачи</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">Мои задачи</Link>
            </li>
          </ul>
          <span className="navbar-text">
            {user.username}
          </span>
        </div>
      </nav>
    );
  }
}

export default connect(
	state => ({
		user: state.user.data,
	}),
	dispatch => ({
		getUserData: userId => {
			dispatch(getUserData(userId));
		}
	})
)(Header);
