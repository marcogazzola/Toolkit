import React, { Component, PropTypes } from 'react';
import './listitem-templates.css';
import { Image } from 'mg-react-ui-toolkit';

export default class ListImageTemplate extends Component {

  render() {
    const { item } = this.props;
    return (
      <div className="row custom-list-item-image">
        <div className="col-sm-2">
          <Image src={item.src} {...this.props} />
        </div>
        <div className="col-sm-10">{item.text}</div>
      </div>
    );
  }
}

// PropTypes validation
ListImageTemplate.propTypes = {
  item: PropTypes.object,
};

// default props
ListImageTemplate.defaultProps = {
  item: {src:"//az594751.vo.msecnd.net/cdn/LinkedIn.svg", text:"testo"},
};


// USAGE:
/*
<SimpleList data={ [{ label: 'A' }, { label: 'B' }] }
  template={ListComplexTemplate}
  actions={{ onItemClick: this.onItemClick }}
/>
*/
