import './style.scss';
import { BsHandbag } from 'react-icons/bs';
import { CiHeart, CiSearch } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import * as ProductService from '../../../services/ProductService';
import { useEffect, useRef, useState } from 'react';
import { Pagination } from 'antd';
import Loading from '../../../components/LoadingComponent/index';
const SearchPage = () => {
  const { value } = useParams();
  const initData = useRef(false);
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const [paginate, setPaginate] = useState({
    page: 0,
    limit: 10,
    total: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!initData.current) {
      const fetchSearchProduct = async (search, limit, page) => {
        setIsLoading(true);
        const res = await ProductService.getProductSearch(search, limit, page);
        if (res.status === 'OK') {
          setSearchData(res?.data);
          setPaginate({ ...paginate, total: res?.total });
        }
        initData.current = true;

        setIsLoading(false);
      };
      fetchSearchProduct(value, paginate.limit, paginate.page);
    }
  }, [paginate.limit, paginate.page]);
  const onChange = (current, pageSize) => {
    setPaginate({ ...paginate, page: current - 1, limit: pageSize });
  };
  const handleNavigateId = id => {
    navigate(`/Product-detail/${id}`);
  };
  return (
    <>
      <div className="grid wide search-title">Kết quả tìm kiếm của "{value}"</div>
      <Loading isLoading={isLoading}>
        <div className="grid wide search-body">
          <div className="row">
            {searchData?.map((item, index) => (
              <div className="col l-2-4 product-grid-align">
                <div className="product-grid" onClick={() => handleNavigateId(item._id)}>
                  <div className="product-image">
                    <img src={item.image} alt="" className="image" />
                    <ul className="product-links">
                      <li className="product-link">
                        <BsHandbag />
                      </li>
                      <li className="product-link">
                        <CiSearch />
                      </li>
                    </ul>
                  </div>
                  <div className="product-content">
                    <h3 className="product-content-title">{item.name}</h3>
                    <ul>
                      <li>
                        <FaRegEye />
                        18.000
                      </li>
                      <li>
                        <CiHeart />
                        18.000
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="row product_paginate">
          <Pagination defaultCurrent={paginate.page} current={paginate.page + 1} pageSize={paginate.limit} total={paginate?.total} onChange={onChange} style={{ textAlign: 'center', marginTop: '30px' }} />
        </div>
      </Loading>
    </>
  );
};

export default SearchPage;
