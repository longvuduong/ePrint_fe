import React, { useEffect, useRef, useState } from 'react';
import { Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/index';
import InputComponent from '../InputComponent/index';
import axios from 'axios';
const AdminOrder = () => {
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const [rowSelected, setRowSelected] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/ordercustom/get-all`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const handleReset = clearFilters => {
    clearFilters();
  };
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}>
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}>
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const columns = [
    {
      title: 'Tên người đặt',
      dataIndex: 'userName',
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('userName'),
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
    },
    {
      title: 'Số lượng',
      dataIndex: 'quantity',
    },
    {
      title: 'Chất liệu',
      dataIndex: 'material',
    },
    {
      title: 'Vật liệu',
      dataIndex: 'materialType',
    },
  ];
  return (
    <>
      <h1>Quản lý đơn hàng </h1>
      <div style={{ marginTop: '20px' }}>
        <TableComponent
          columns={columns}
          data={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>
    </>
  );
};
export default AdminOrder;
