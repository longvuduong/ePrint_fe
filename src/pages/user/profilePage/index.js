import { Menu } from 'antd';
import { UserOutlined, PayCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import UserProfile from '../../../components/UserProfile';
import UserOrder from '../../../components/UserOrder';
const ProfilePage = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [getItem('Hồ sơ', 'profile', <UserOutlined />), getItem('Đơn hàng', 'order', <PayCircleOutlined />)];
  const [keySelected, setKeySelected] = useState();
  const handleOnCLick = ({ key }) => {
    setKeySelected(key);
  };
  const renderPage = key => {
    switch (key) {
      case 'profile':
        return <UserProfile />;
      case 'order':
        return <UserOrder />;

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
export default ProfilePage;
