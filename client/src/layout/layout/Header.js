import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connectStore } from 'redux-box';
import { module as userModule } from 'store/user';




const LoggedOutView = props => {
  if (!props.isAuthenticated) {
    return (
      <React.Fragment>
        <div className="controls-item">
          <Link to="/login" className="logout">login</Link>
        </div>
        <div className="controls-item">
          <Link to="/register" className="logout">register</Link>
        </div>
      </React.Fragment>
    );
  }
  return null;
};

const LoggedInView = props => {

  if (props.isAuthenticated) {
    return (
      <React.Fragment>
        <div className="controls-item user">
          {`${props.currentUser.username}`} ( <a className="logout" onClick={props.logout}>logout</a> )
                      </div>
        <div className="controls-item basket">
          Bag ( <span className="count">{props.cart.length}</span> )
                      </div>
      </React.Fragment>
    );
  }

  return null;
};


class Header extends Component {
  componentDidMount() {
    this.props.userModule.getUser();
  }

  render() {
    return (
      <header className="header">
        <div className="wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                Sneaker Head
              </Link>

            </div>
          </div>

          <div className="controls">
            <LoggedOutView currentUser={this.props.userModule.user}
              isAuthenticated={this.props.userModule.isAuthenticated} />

            <LoggedInView currentUser={this.props.userModule.user}
              cart={this.props.userModule.cart}
              logout={this.props.userModule.logout}
              isAuthenticated={this.props.userModule.isAuthenticated} />

            <div className="controls-item search">
              <button className="search-button"></button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default connectStore({
  userModule
})(Header);