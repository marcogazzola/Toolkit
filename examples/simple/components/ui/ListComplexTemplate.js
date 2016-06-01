import React, { Component, PropTypes } from 'react';
import './listitem-templates.css';
import { FlatButton, FlatButtonGroup } from 'mg-react-ui-toolkit';

export default class ListComplexTemplate extends Component {

render() {
  const { actions, item } = this.props;
  return (
      <div className="custom-listitem complex">
          <div className="label"> My Label: {item.label}</div>
          <FlatButtonGroup>
              <FlatButton type="primary" pill
                onClick={actions.onItemClick}
              >Click Me</FlatButton>
              <FlatButton type="danger" pill>Another</FlatButton>
            </FlatButtonGroup>
      </div>
    );
}
}

// PropTypes validation
ListComplexTemplate.propTypes = {
  actions: PropTypes.object,
  item: PropTypes.object,
};

// default props
ListComplexTemplate.defaultProps = { };


// USAGE:
/*
<SimpleList data={ [{ label: 'A' }, { label: 'B' }] }
  template={ListComplexTemplate}
  actions={{ onItemClick: this.onItemClick }}
/>
*/
