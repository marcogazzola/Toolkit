import React, { Component, PropTypes } from 'react';
import Item from './DataTableItem';

export default class DataTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    let rows = [];
    if (data) {
      rows = Object.keys(data).map(key => {
        let val = this.props.data[key];
        // if it's a number
        if (!isNaN(val)) {
          // if decimal and it's a floating number
          if (this.props.decimal && val % 1 !== 0) {
            val = Number(val).toFixed(this.props.decimal);
          }
        }
        return <Item key={key} label={key} value={val}/>;
      });
    } else {
      rows = null;
    }

    return (
      <div>
        {rows}
      </div>
    );
  }
}
DataTable.propTypes = {
  data: PropTypes.object,
  decimal: PropTypes.number,
};

DataTable.defaultProps = {
  decimal: null,
};
