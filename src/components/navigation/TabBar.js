import './tabbar.less';
import React, { Component, PropTypes } from 'react';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.onTabSelect = this.onTabSelect.bind(this);
    this.renderList = this.renderList.bind(this);
  }
  onTabSelect(e) {
    const selectedIndex = parseInt(e.currentTarget.dataset.uid);
    this.props.onTabSelect(selectedIndex);
  }
  renderList() {
    const { children, selectedIndex } = this.props;

    return children.map((obj, index) => {
      const cls = (index === selectedIndex) ? 'active' : null;
      return (
        <li
          className={cls}
          key={`tab${index}`}
          onClick={this.onTabSelect}
          data-uid={index}
        >
          <a>{obj}</a>
        </li>
      );
    });
  }

  render() {
    const cls = `${this.props.tabClass} nav nav-pills`;
    return (
      <ul className={cls}>
        {this.renderList()}
      </ul>
    );
  }
}


// PropTypes validation
TabBar.propTypes = {
  selectedIndex: PropTypes.number.isRequired,
  children: PropTypes.array.isRequired,
  onTabSelect: PropTypes.func.isRequired,
  tabClass: PropTypes.string,
};

// default props
TabBar.defaultProps = {
  tabClass: 'tabbar',
};
