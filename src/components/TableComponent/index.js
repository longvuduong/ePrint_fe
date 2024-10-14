import { Table } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
const TableComponent = props => {
  const { selectionType = 'checkbox', data = [], columns = [] } = props;
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    // getCheckboxProps: record => ({
    //   disabled: record.name === 'Disabled User',
    //   name: record.name,
    // }),
  };

  return (
    <div>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        {...props}
      />
    </div>
  );
};
TableComponent.propTypes = {
  selectionType: PropTypes.string,
};
export default TableComponent;
