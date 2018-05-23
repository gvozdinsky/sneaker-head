import React, { Component } from 'react';

class Breadcumbs extends Component {

  render() {
    const { items } = this.props;
    return (
      <div className="breadcumbs">
        {
          items.map((item, i) => {
            const isLast = i === (items.length - 1);
            const divider = isLast ? null : <span className="divider">/</span>;
            return (
              <React.Fragment>
                <span className="section">{item.text}</span>
                {divider}
              </React.Fragment>
            )
          })
        }
      </div>
    );
  }
}

export default Breadcumbs;