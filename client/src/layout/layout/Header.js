import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject("user")
@observer
class Header extends Component {
  componentDidMount() {
    this.props.user.getUser();
  }

  render() {
    const userStore = this.props.user;
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
            {
              userStore.isAuthenticated
                ?
                <React.Fragment>
                  <div className="controls-item user">
                    {`${userStore.user.username}`} ( <Link to="/logout" className="logout">logout</Link> )
                      </div>
                  <div className="controls-item basket">
                    Bag ( <span className="count">{userStore.cart.length}</span> )
                      </div>
                </React.Fragment>
                :
                <React.Fragment>
                  <div className="controls-item">
                    <Link to="/login" className="logout">login</Link>
                  </div>
                  <div className="controls-item">
                    <Link to="/register" className="logout">register</Link>
                  </div>
                </React.Fragment>
            }


            <div className="controls-item search">
              <button className="search-button"></button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;