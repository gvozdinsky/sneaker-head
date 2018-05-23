import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { inject, observer } from 'mobx-react';

@inject("auth")
@observer
class Header extends Component {
  componentDidMount() {
    this.props.auth.getUser();
  }
  renderMenu = () => {
    const items = [
      {
        text: "Men",
        link: ""
      },
      {
        text: "Woman",
        link: ""
      },
      {
        text: "Brands",
        link: "/brands"
      }
    ];

    return (
      <div className="menu">
        {
          items.map(item => {
            return <div className="item"><Link to={item.link}>{item.text}</Link></div>
          })
        }
      </div>
    )

  }
  render() {
    const { user } = this.props.auth;
    console.log('user', user)
    return (
      <header className="header">
        <div className="wrapper">
          <div className="header-left">
            <div className="logo">
              <Link to="/">
                Sneaker Head
              </Link>

            </div>
            {/* {this.renderMenu()} */}
          </div>

          <div className="controls">
            <div className="controls-item">
              <Link to="/login" className="logout">login</Link>
            </div>
            <div className="controls-item">
              <Link to="/register" className="logout">register</Link>
            </div>
            <div className="controls-item user">
              Hi, {`${user ? user.username : 'Guest'}`} ( <Link to="/logout" className="logout">logout</Link> )
            </div>
            <div className="controls-item basket">
              Basket ( <span className="count">0</span> )
            </div>
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