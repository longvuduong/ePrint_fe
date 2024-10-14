import { Menu } from 'antd';
import { SnippetsOutlined, ProductOutlined, UserOutlined, PayCircleOutlined, FilePdfOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import AdminUser from '../../../components/AdminUser/index';
import AdminProduct from '../../../components/AdminProduct/index';
import AdminBlog from '../../../components/AdminBlog/index';
import AdminOrder from '../../../components/AdminOrder';
import AdminCollection from '../../../components/AdminCollection';

const AdminPage = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [getItem('Người dùng', 'users', <UserOutlined />), getItem('Sản phẩm', 'products', <ProductOutlined />), getItem('Bài viết', 'blogs', <SnippetsOutlined />), getItem('Đơn hàng', 'orders', <PayCircleOutlined />), getItem('Bộ sưu tập', 'collections', <FilePdfOutlined />)];
  const [keySelected, setKeySelected] = useState();
  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  const renderPage = key => {
    switch (key) {
      case 'users':
        return <AdminUser />;
      case 'products':
        return <AdminProduct />;
      case 'blogs':
        return <AdminBlog />;
      case 'orders':
        return <AdminOrder />;
      case 'collections':
        return <AdminCollection />;
      default:
        return <></>;
    }
  };
  return (
    <div style={{ display: 'flex', overflowX: 'hidden' }}>
      <Menu
        mode="inline"
        style={{
          width: 256,
          boxShadow: '1px 1px 2px #ccc',
          height: '100vh',
        }}
        items={items}
        onClick={handleOnCLick}
      />
      <div style={{ flex: 1, padding: '15px 0 15px 15px' }}>{renderPage(keySelected)}</div>
    </div>
  );
};
export default AdminPage;
