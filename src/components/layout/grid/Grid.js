import React, { Component, PropTypes } from 'react';
import './grid.css';

export default class Grid extends Component {
  renderChild() {
    const { children } = this.props;
    return <div className="row"><div className='col-xs-12'>{children}</div></div>
  }

  renderChildren() {
    const { children, prefix } = this.props;

    // Set the Grid class name
    const className = `col-${prefix}-${12 / children.length}`;

    return (
      <div className="row">
        {
          this.props.children.map(function cells(obj, index) {
            // styles
            const style = {
              padding: obj.props.padding,
              textAlign: obj.props.align,
              backgroundColor: obj.props.bg || 'rgba(0,0,0,0)',
            };

            return React.createElement('div', { className, style, key: `c${index}` }, obj);
          })
        }
      </div>
    );
  }
  render() {
    return (Array.isArray(this.props.children)) ? this.renderChildren() : this.renderChild();
  }
}


// PropTypes validation
Grid.propTypes = {
  prefix: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  children: PropTypes.any.isRequired,
};

// default props
Grid.defaultProps = {
  prefix: 'sm',
};


// Materialize CSS Grid documentation
// http://materializecss.com/grid.html
