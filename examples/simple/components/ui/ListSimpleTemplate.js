import React, { Component, PropTypes } from 'react';
import './listitem-templates.css';

export default class ListSimpleTemplate extends Component {
  render() {
    return (
        <div className="custom-listitem">
          Label: {this.props.item}
      </div>
    );
  }
}

// PropTypes validation
ListSimpleTemplate.propTypes = {
  item: PropTypes.any,
};

// default props
ListSimpleTemplate.defaultProps = { };

// USAGE:
// <SimpleList data={ [1, 2, 3] } template={ListSimpleTemplate} />
