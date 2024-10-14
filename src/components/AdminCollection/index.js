import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Select, Space } from 'antd';
import { FolderAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/index';
import InputComponent from '../InputComponent/index';
import DrawerComponent from '../DrawerComponent/index';
import * as CollectionService from '../../services/CollectionService.js';
import { getBase64, renderOptions } from '../../utils/router';
import { WrapperUploadFile } from './style.js';
import axios from 'axios';
import ModalComponent from '../ModalComponent/index.js';
import { generateSlug } from '../../utils/index.js';
import { axiosJWT } from '../../services/UserService.js';
const AdminCollection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState('');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [typeCollections, setTypeCollections] = useState([]);
  const inittial = () => ({
    typeName: '',
    typeSlug: '',
    newType: '',
    fileName: '',
    fileLink: '',
  });
  const [stateCollection, setStateCollection] = useState(inittial());
  const [stateCollectionDetails, setStateCollectionDetails] = useState(inittial());
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const createCollection = async () => {
    try {
      const fileInput = document.getElementById('file-pdf');
      const file = fileInput.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('folder', 'file');
      const dataRes = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData);
      const downloadURL = dataRes.data?.downloadURL;

      const dataCollection = {
        typeName: stateCollection.typeName === 'add_type' ? stateCollection.newType : stateCollection.typeName,
        fileName: file.name?.split('.')[0],
        fileLink: downloadURL,
      };
      const typeSlug = generateSlug(dataCollection.typeName);
      dataCollection.typeSlug = typeSlug;

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/collection/create`, dataCollection);

      if (res.data.status === 'OK') {
        handleCancel();
        fetchData();
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred while signing in:', error);
    }
  };
  const deleteCollection = async () => {
    try {
      const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/collection/delete/${rowSelected}`, {});
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
  const onDelete = () => {
    deleteCollection();
  };
  const updateCollection = async () => {
    try {
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/collection/update/${rowSelected}`, {
        typeName: stateCollectionDetails.typeName,
        pdf: stateCollectionDetails.pdf,
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
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (!isModalOpen) {
      form.setFieldsValue(stateCollectionDetails);
    } else {
      form.setFieldsValue(inittial());
    }
  }, [form, stateCollectionDetails, isModalOpen]);

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      fetchGetDetailsCollection(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);
  useEffect(() => {
    fetchAllTypeCollection();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/collection/get-all`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchGetDetailsCollection = async () => {
    const res = await CollectionService.getDetailsCollection(rowSelected);
    if (res?.data) {
      setStateCollectionDetails({
        typeName: res?.data?.typeName,
        fileName: res?.data?.fileName,
      });
    }
  };
  const fetchAllTypeCollection = async () => {
    const res = await CollectionService.getAllTypeCollection();
    if (res?.status === 'OK') {
      setTypeCollections(res?.data);
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
  const handleCancel = () => {
    setStateCollection({
      typeName: '',
      pdf: '',
    });
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const handleCloseDrawer = () => {
    setStateCollectionDetails({
      typeName: '',
      pdf: '',
    });
    setIsOpenDrawer(false);
    form.resetFields();
  };
  const handleOnchange = e => {
    setStateCollection({
      ...stateCollection,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeDetails = e => {
    setStateCollectionDetails({
      ...stateCollectionDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateCollectionDetails({
      ...stateCollectionDetails,
      pdf: file.preview,
    });
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const handleReset = clearFilters => {
    clearFilters();
  };
  const handleChangeSelect = value => {
    setStateCollection({
      ...stateCollection,
      typeName: value,
    });
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
      title: 'Thể loại bộ sưu tập',
      dataIndex: 'typeName',
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('typeName'),
    },
    {
      title: 'Tập tin pdf',
      dataIndex: 'fileName',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: renderAction,
    },
  ];
  return (
    <>
      <h1>Quản lý bộ sưu tập</h1>
      <div style={{ marginTop: '20px' }}>
        <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={showModal}>
          <FolderAddOutlined style={{ fontSize: '60px' }} />
        </Button>
      </div>
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
      <ModalComponent title="Đăng bộ sưu tập" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          name="createCollectionForm"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'stretch',
          }}
          autoComplete="on"
          form={form}>
          <Form.Item
            label="Tên bộ sưu tập"
            name="typeName"
            rules={[
              {
                required: true,
                message: 'Please input your Blog type!',
              },
            ]}>
            <Select name="typeName" value={stateCollection.typeName} onChange={handleChangeSelect} options={renderOptions(typeCollections)} />
          </Form.Item>
          {stateCollection.typeName === 'add_type' && (
            <Form.Item label="New type" name="newType" rules={[{ required: true, message: 'Please input your type!' }]}>
              <InputComponent value={stateCollection.newType} onChange={handleOnchange} name="newType" />
            </Form.Item>
          )}
          <Form.Item
            label="Tập tin pdf"
            name="fileName"
            rules={[
              {
                required: true,
                message: 'Please input your Collection pdf!',
              },
            ]}>
            <input type="file" id="file-pdf" />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit" onClick={createCollection}>
              Đăng
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
      <DrawerComponent title="Chi tiết bộ sưu tập" isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
        <Form
          name="updateCollectionForm"
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
          autoComplete="on"
          form={form}>
          <Form.Item
            label="Tên bộ sưu tập"
            name="typeName"
            rules={[
              {
                required: true,
                message: 'Please input your Collection title!',
              },
            ]}>
            <InputComponent value={stateCollectionDetails['typeName']} onChange={handleOnchangeDetails} name="typeName" />
          </Form.Item>

          <Form.Item
            label="Tập tin pdf"
            name="pdf"
            rules={[
              {
                required: true,
                message: 'Please input your Collection pdf!',
              },
            ]}>
            <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
              <Button>Select File</Button>
            </WrapperUploadFile>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit" onClick={updateCollection}>
              Apply
            </Button>
          </Form.Item>
        </Form>
      </DrawerComponent>
      <ModalComponent title="Xóa bộ sưu tập" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={onDelete}>
        <div>Bạn có chắc chắn muốn xóa bộ sưu tập này không ?</div>
      </ModalComponent>
    </>
  );
};
export default AdminCollection;
