import React, { Component, PropTypes } from 'react';
import './collapsable-panel.less';

export default class CollapsablePanel extends React.Component {
   constructor(props) {
     super(props);
     this.state = { opened: false };
     this.toggle = this.toggle.bind(this);
   }

   toggle() {
     this.setState({ opened: !this.state.opened });
   }

   render() {
     const { children, title, titleCls, bodyCls } = this.props;
     const { opened } = this.state;
     const body = (opened) ? bodyCls : bodyCls + ' closed';

     return (
       <div className="collapsable-panel ">
         <div className={titleCls}
           onClick={this.toggle}
         >{title}</div>
         <div className={body}>{children}</div>
       </div>
     );
   }
}


CollapsablePanel.defaultProps = {
  titleCls: 'collapsable-panel titleBar',
  bodyCls: 'collapsable-panel body',
};

CollapsablePanel.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  titleCls: PropTypes.string,
  bodyCls: PropTypes.string,
};
