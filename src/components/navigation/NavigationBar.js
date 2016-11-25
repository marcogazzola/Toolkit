import React, { Component, PropTypes } from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navigationbar-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {this.props.AppName &&
            <a className="navbar-brand" style={{ marginLeft: 0 }} href="/">{this.props.AppName}</a> }
          </div>
          <div className="collapse navbar-collapse" id="bs-navigationbar-navbar-collapse-1">
            <ul className="nav navbar-nav">
              {this.props.children.map(object => object)}
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link2</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.props.rightContent.map(object => object)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  AppName: PropTypes.string.isRequired,
  rightContent: PropTypes.array,
  children: PropTypes.array,
};

NavigationBar.defaultProps = {
  rightContent: [],
  children: [],
};

export default NavigationBar;
