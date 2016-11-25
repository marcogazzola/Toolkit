import React, { Component, PropTypes } from 'react';

class NavigationItem extends Component {
  render() {
    return (
      <li className={this.props.active ? 'active' : ''}>
        <a href={this.props.itemUrl}>{this.props.itemTitle}
          {this.props.active && <span className="sr-only">(current)</span>}</a>
      </li>
    );
  }
}

NavigationItem.propTypes = {
  itemUrl: PropTypes.string,
  itemTitle: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

NavigationItem.defaultProps = {
  itemUrl: '#',
  active: false,
};

export default NavigationItem;
