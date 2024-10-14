import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Select, Space } from 'antd';
import { AppstoreAddOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import TableComponent from '../TableComponent/index';
import InputComponent from '../InputComponent/index';
import DrawerComponent from '../DrawerComponent/index';
import * as ProductService from '../../services/ProductService';
import { getBase64, renderOptions } from '../../utils/router';
import { WrapperUploadFile } from './style.js';
import axios from 'axios';
import ModalComponent from '../ModalComponent/index.js';
import { axiosJWT } from '../../services/UserService.js';
import { generateSlug } from '../../utils/index.js';
import { Editor } from '@tinymce/tinymce-react';
import * as UploadService from '../../services/UploadService.js';
const AdminProduct = () => {
  const editorRef = useRef(null);
  const editorUpdateRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState('');
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [typeProducts, setTypeProducts] = useState([]);
  const inittial = () => ({
    name: '',
    typeName: '',
    price: '',
    description: '',
    image: '',
    newType: '',
    typeSlug: '',
  });
  const [stateProduct, setStateProduct] = useState(inittial());
  const [stateProductDetails, setStateProductDetails] = useState(inittial());
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const searchInput = useRef(null);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const createProduct = async () => {
    try {
      const urlImage = await UploadService.uploadFiletoFireBase('product-image', 'product');
      const dataProduct = {
        name: stateProduct.name,
        typeName: stateProduct.typeName === 'add_type' ? stateProduct.newType : stateProduct.typeName,
        price: stateProduct.price,
        description: editorRef.current.getContent(),
        image: urlImage,
      };
      const typeSlug = generateSlug(dataProduct.typeName);
      dataProduct.typeSlug = typeSlug;

      const res = await axios.post(`${process.env.REACT_APP_API_URL}/product/create`, dataProduct);

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
  const onDelete = () => {
    deleteProduct();
  };
  const updateProduct = async () => {
    try {
      const urlImage = await UploadService.uploadFiletoFireBase('product_image-update', 'product');
      const res = await axios.put(`${process.env.REACT_APP_API_URL}/product/update/${rowSelected}`, {
        name: stateProductDetails.name,
        typeName: stateProductDetails.typeName,
        price: stateProductDetails.price,
        description: editorUpdateRef.current.getContent(),
        image: urlImage,
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
  const deleteProduct = async () => {
    try {
      const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/product/delete/${rowSelected}`, {});
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
    if (!isModalOpen) {
      form.setFieldsValue(stateProductDetails);
    } else {
      form.setFieldsValue(inittial());
    }
  }, [form, stateProductDetails, isModalOpen]);

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      fetchGetDetailsProduct(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);
  useEffect(() => {
    fetchAllTypeProduct();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product/get-all`);
      setData(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchGetDetailsProduct = async () => {
    const res = await ProductService.getDetailsProduct(rowSelected);
    if (res?.data) {
      setStateProductDetails({
        name: res?.data?.name,
        typeName: res?.data?.typeName,
        price: res?.data?.price,
        description: res?.data?.description,
        image: res?.data?.image,
      });
    }
  };
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct();
    if (res?.status === 'OK') {
      setTypeProducts(res?.data);
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
    setStateProduct({
      name: '',
      typeName: '',
      price: '',
      description: '',
      image: '',
    });
    setIsModalOpen(false);
    form.resetFields();
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const handleCloseDrawer = () => {
    setStateProductDetails({
      name: '',
      typeName: '',
      price: '',
      description: '',
      image: '',
    });
    setIsOpenDrawer(false);
    form.resetFields();
  };

  const handleOnchange = e => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeDetails = e => {
    setStateProductDetails({
      ...stateProductDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProduct({
      ...stateProduct,
      image: file.preview,
    });
  };
  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateProductDetails({
      ...stateProductDetails,
      image: file.preview,
    });
  };
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const handleReset = clearFilters => {
    clearFilters();
  };
  const handleChangeSelect = value => {
    setStateProduct({
      ...stateProduct,
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
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Giá sản phẩm',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Loại sản phẩm',
      dataIndex: 'typeName',
    },
    {
      title: 'Sửa/Xóa',
      dataIndex: 'action',
      render: renderAction,
    },
  ];
  return (
    <>
      <h1>Quản lý sản phẩm</h1>
      <div style={{ marginTop: '20px' }}>
        <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={showModal}>
          <AppstoreAddOutlined style={{ fontSize: '60px' }} />
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
      <ModalComponent title="Tạo sản phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form
          name="createProductForm"
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
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your product name!',
              },
            ]}>
            <InputComponent value={stateProduct['name']} onChange={handleOnchange} name="name" />
          </Form.Item>

          <Form.Item
            label="Loại sản phẩm"
            name="typeName"
            rules={[
              {
                required: true,
                message: 'Please input your product type!',
              },
            ]}>
            <Select name="typeName" value={stateProduct.typeName} onChange={handleChangeSelect} options={renderOptions(typeProducts)} />
          </Form.Item>
          {stateProduct.typeName === 'add_type' && (
            <Form.Item label="New type" name="newType" rules={[{ required: true, message: 'Please input your type!' }]}>
              <InputComponent value={stateProduct.newType} onChange={handleOnchange} name="newType" />
            </Form.Item>
          )}
          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input your product price!',
              },
            ]}>
            <InputComponent value={stateProduct.price} onChange={handleOnchange} name="price" />
          </Form.Item>
          <Editor
            apiKey="7szssbtzvq18wgj85d0dpl6dl3ygh2tn0vuutb5olmlys1m5"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="Hãy xóa và nhập nội dung tin tức vào đây..."
            init={{
              selector: 'textarea',
              images_file_types: 'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp',
              automatic_uploads: true,
              height: 500,
              menubar: true,
              plugins: ['a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'],
              toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' + 'alignleft aligncenter alignright alignjustify | ' + 'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
          <Form.Item
            label="Hình ảnh"
            name="image"
            rules={[
              {
                required: true,
                message: 'Please input your Product Image!',
              },
            ]}>
            <input id="product-image" type="file" multiple={false} />
            {stateProduct?.image && (
              <img
                src={stateProduct?.image}
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
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit" onClick={createProduct}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </ModalComponent>
      <DrawerComponent title="Chi tiết sản phẩm" isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">
        <Form
          name="updateProductForm"
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
            label="Tên sản phẩm"
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your product name!',
              },
            ]}>
            <InputComponent value={stateProductDetails['name']} onChange={handleOnchangeDetails} name="name" />
          </Form.Item>

          <Form.Item
            label="Loại sản phẩm"
            name="typeName"
            rules={[
              {
                required: true,
                message: 'Please input your product type!',
              },
            ]}>
            <InputComponent value={stateProductDetails['typeName']} onChange={handleOnchangeDetails} name="typeName" />
          </Form.Item>
          <Form.Item
            label="Giá sản phẩm"
            name="price"
            rules={[
              {
                required: true,
                message: 'Please input your product price!',
              },
            ]}>
            <InputComponent value={stateProductDetails.price} onChange={handleOnchangeDetails} name="price" />
          </Form.Item>
          <Editor
            apiKey="7szssbtzvq18wgj85d0dpl6dl3ygh2tn0vuutb5olmlys1m5"
            onInit={(evt, editor) => (editorUpdateRef.current = editor)}
            initialValue={stateProductDetails['description']}
            init={{
              selector: 'textarea',
              images_file_types: 'jpeg,jpg,jpe,jfi,jif,jfif,png,gif,bmp,webp',
              automatic_uploads: true,
              height: 500,
              menubar: true,
              plugins: ['a11ychecker', 'advlist', 'advcode', 'advtable', 'autolink', 'checklist', 'export', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'visualblocks', 'powerpaste', 'fullscreen', 'formatpainter', 'insertdatetime', 'media', 'table', 'help', 'wordcount'],
              toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' + 'alignleft aligncenter alignright alignjustify | ' + 'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
          <Form.Item
            label="Hình ảnh"
            name="image"
            rules={[
              {
                required: true,
                message: 'Please input your Product Image!',
              },
            ]}>
            <input id="product_image-update" type="file" multiple={false} />
            {stateProductDetails?.image && (
              <img
                src={stateProductDetails?.image}
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
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 16,
            }}>
            <Button type="primary" htmlType="submit" onClick={updateProduct}>
              Apply
            </Button>
          </Form.Item>
        </Form>
      </DrawerComponent>
      <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={onDelete}>
        <div>Bạn có chắc chắn muốn xóa sản phẩm này không ?</div>
      </ModalComponent>
    </>
  );
};
export default AdminProduct;
