import { Button, Form } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './style.js';
import TableComponent from '../TableComponent';
import InputComponent from '../InputComponent';
import DrawerComponent from '../DrawerComponent';
import { WrapperUploadFile } from '../AdminUser/style';
import ModalComponent from '../ModalComponent/index.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { axiosJWT } from '../../services/UserService.js';
import { getBase64 } from '../../utils/router.js';
import * as UserService from '../../services/UserService';

const AdminUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState('');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const inittial = () => ({
    name: '',
    email: '',
    password: '',
    image: '',
  });
  const [stateUser, setStateUser] = useState(inittial());
  const [stateUserDetails, setStateUserDetails] = useState(inittial());
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  const onUpdate = () => {
    updateUser();
  };
  const onDelete = () => {
    deleteUser();
  };
  const updateUser = async () => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/user/update-user/${rowSelected}`, {
        name: stateUserDetails.name,
        email: stateUserDetails.email,
        password: stateUserDetails.password,
        isAdmin: stateUserDetails.isAdmin,
        avatar: stateUserDetails.avatar,
      });

      if (res.data.status === 'OK') {
        handleCloseDrawer();
        fetchData();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
    }
  };
  const deleteUser = async () => {
    try {
      const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/user/delete-user/${rowSelected}`, {});
      if (res.data.status === 'OK') {
        handleCancelDelete();
        fetchData();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      fetchGetDetailsUser(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);
  useEffect(() => {
    if (!isModalOpen) {
      form.setFieldsValue(stateUserDetails);
    } else {
      form.setFieldsValue(inittial());
    }
  }, [form, stateUserDetails, isModalOpen]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/getAll`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchGetDetailsUser = async () => {
    const res = await UserService.getDetailsUser(rowSelected);
    if (res?.data) {
      setStateUserDetails({
        name: res?.data?.name,
        email: res?.data?.email,
        password: res?.data?.password,
        avatar: res?.data?.avatar,
      });
    }
  };
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ color: 'red', fontSize: '3rem', cursor: 'pointer' }}
          onClick={() => {
            setIsModalOpenDelete(true);
          }}
        />
        <EditOutlined
          style={{ color: 'orange', fontSize: '3rem', cursor: 'pointer' }}
          onClick={() => {
            setIsOpenDrawer(true);
          }}
        />
      </div>
    );
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const handleCloseDrawer = () => {
    setStateUserDetails({
      name: '',
      email: '',
      password: '',
      avatar: '',
    });
    setIsOpenDrawer(false);
    form.resetFields();
  };

  const handleOnchangeDetails = e => {
    setStateUserDetails({
      ...stateUserDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateUserDetails({
      ...stateUserDetails,
      avatar: file.preview,
    });
  };
  const columns = [
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Mật khẩu',
      dataIndex: 'password',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction,
    },
  ];
  return (
    <>
      <h1>Quản lý người dùng</h1>
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
      <DrawerComponent title="Cập nhật thông tin người dùng" isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
        <Form
          name="updateUserForm"
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 22,
          }}
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
          onFinish={onUpdate}
          autoComplete="on"
          form={form}>
          <Form.Item
            label="Tên người dùng"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your User name!',
              },
            ]}>
            <InputComponent value={stateUserDetails['name']} onChange={handleOnchangeDetails} name="name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your User email!',
              },
            ]}>
            <InputComponent value={stateUserDetails['email']} onChange={handleOnchangeDetails} name="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your User password!',
              },
            ]}>
            <InputComponent value={stateUserDetails.password} onChange={handleOnchangeDetails} name="password" />
          </Form.Item>
          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[
              {
                required: true,
                message: 'Please input your User Image!',
              },
            ]}>
            <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
              <Button>Select File</Button>
              {stateUserDetails?.avatar && (
                <img
                  src={stateUserDetails?.avatar}
                  style={{
                    height: '60px',
                    width: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginLeft: '10px',
                  }}
                  alt="avatar"
                />
              )}
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit">
              Apply
            </Button>
          </Form.Item>
        </Form>
      </DrawerComponent>
      <ModalComponent title="Xóa người dùng" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={onDelete}>
        <div>Bạn có chắc chắn muốn xóa người dùng này không ?</div>
      </ModalComponent>
    </>
  );
};
export default AdminUser;
