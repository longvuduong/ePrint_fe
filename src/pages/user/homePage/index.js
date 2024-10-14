import { memo, useEffect, useState } from 'react';
import { banner, images } from '../../../img/index';
import { CiClock2 } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { BsHandbag } from 'react-icons/bs';
import { CiHeart } from 'react-icons/ci';
import { Link, useNavigate } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './style.scss';
import * as ProductService from '../../../services/ProductService';
import * as BlogService from '../../../services/BlogService';

const HomePage = () => {
  const [dataProduct, setDataProduct] = useState([]);
  const [isActive, setIsActive] = useState('hop-banh-tet');
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);
  const getAllProduct = async typeProduct => {
    const res = await ProductService.getAllProduct('', 15, typeProduct);
    setDataProduct(res.data);
  };

  const fetchBlog = async (search, limit, typeBlog) => {
    const res = await BlogService.getAllBlog(search, limit, typeBlog);
    setBlogData(res?.data);
  };

  const handleClick = typeProduct => {
    getAllProduct(typeProduct);
    setIsActive(typeProduct);
  };
  useEffect(() => {
    getAllProduct(isActive);
  }, [isActive]);
  useEffect(() => {
    fetchBlog('', 3, '');
  }, []);
  useEffect(() => {
    if (blogData.length) {
      blogData.forEach((blog, index) => {
        const elementBlogDetail = document.querySelector(`.news-dscr-${index}`);
        if (elementBlogDetail) {
          elementBlogDetail.innerHTML = blog.content;
        }
      });
    }
  }, [blogData]);
  const handleNavigatetype = typeSlug => {
    navigate(`/Product-type/${typeSlug}`, { state: typeSlug });
  };
  const handleNavigateId = id => {
    navigate(`/Product-detail/${id}`);
  };
  return (
    <>
      <div className="grid ">
        <div>
          <AwesomeSlider>
            <div data-src={banner.banner1} />
            <div data-src={banner.banner2} />
            <div data-src={banner.banner3} />
            <div data-src={banner.banner4} />
          </AwesomeSlider>
        </div>
      </div>
      <div className="grid wide content">
        <div className="row advanced-border ">
          <div className="col l-3 advanced">
            <svg width="65" height="39" viewBox="0 0 65 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.0819H10.6624V2H46.244V32.8356" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.0992 32.8356H46.244H50.5444" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M46.244 9.67154H55.2523C59.5292 9.67154 63 13.1394 63 17.4193V32.8357H59.2244" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 25.0527H10.6624V32.8357H17.4193" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.7578 37.1771C24.1555 37.1771 26.0993 35.2334 26.0993 32.8357C26.0993 30.4379 24.1555 28.4942 21.7578 28.4942C19.3601 28.4942 17.4164 30.4379 17.4164 32.8357C17.4164 35.2334 19.3601 37.1771 21.7578 37.1771Z" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M54.8829 37.1771C57.2807 37.1771 59.2244 35.2334 59.2244 32.8357C59.2244 30.4379 57.2807 28.4942 54.8829 28.4942C52.4852 28.4942 50.5415 30.4379 50.5415 32.8357C50.5415 35.2334 52.4852 37.1771 54.8829 37.1771Z" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 17.4193H29.8456" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8497 13.6759L31.4902 17.4193L26.8497 21.2536" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div>
              <p className="advanced_title">Giao hàng miễn phí</p>
              <p className="advanced_dscr">Khu vực Hà Nội</p>
            </div>
            <div className="advanced-colunms"></div>
          </div>
          <div className="col l-3 advanced">
            <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 14.152L26.9986 2L52 14.152L26.9986 26.7197L2 14.152Z" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.8326 15.4374L28.451 7.12553" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.0514 19.2036L2 24.0885L12.0514 29.1429L18.0959 32.1816L26.9986 36.6589L41.9458 29.1429L51.9973 24.0885L41.9458 19.2036" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.096 22.2423L11.8326 25.374" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M41.9458 29.1429L51.9973 34.0278L26.9986 46.5982L2 34.0278L12.0514 29.1429" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18.096 32.1816L11.8326 35.3133" stroke="#D22227" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div>
              <p className="advanced_title">In số lượng</p>
              <p className="advanced_dscr">Chỉ tử 1 quyển</p>
            </div>
            <div className="advanced-colunms"></div>
          </div>
          <div className="col l-3 advanced">
            <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.635 3.81458C19.635 2.84863 19.635 1.93597 19.635 1C22.0898 1 24.5114 1 26.9862 1C26.9862 1.32976 26.9862 1.65951 26.9862 1.98594C26.9862 2.4789 26.9995 2.9752 26.9862 3.46817C26.9795 3.73131 27.0528 3.82457 27.3326 3.82124C29.068 3.80792 30.8034 3.81458 32.5388 3.81458C35.2501 3.81458 37.9647 3.81125 40.6761 3.82124C40.9659 3.82124 41.1124 3.75796 41.229 3.46484C41.6753 2.35566 42.8178 1.76277 44.0702 1.95263C45.1761 2.11917 46.0821 3.05181 46.222 4.16765C46.3852 5.48335 45.5824 6.74907 44.3567 7.06551C42.961 7.42524 41.6487 6.75574 41.189 5.49667C41.1191 5.30015 41.0158 5.23686 40.8126 5.24019C37.8115 5.24685 34.8137 5.24352 31.8126 5.24352C31.7693 5.24352 31.7294 5.25352 31.5961 5.2735C31.7493 5.35677 31.8293 5.40674 31.9126 5.44671C37.9847 8.21133 41.8285 12.8312 43.4573 19.2964C43.5839 19.7961 43.6639 20.309 43.7438 20.8187C43.7771 21.0285 43.8504 21.1151 44.0736 21.1084C44.6132 21.0951 45.1528 21.1051 45.7223 21.1051C45.7223 22.7506 45.7223 24.376 45.7223 26.0315C44.1069 26.0315 42.4814 26.0315 40.8226 26.0315C40.8226 24.4127 40.8226 22.7872 40.8226 21.1084C41.3056 21.1084 41.8052 21.1084 42.3548 21.1084C41.7053 17.0281 39.9832 13.5607 37.112 10.6828C34.3208 7.8849 30.9533 6.1795 27.0095 5.47002C27.0095 6.45596 27.0095 7.3886 27.0095 8.35122C24.5447 8.35122 22.1265 8.35122 19.655 8.35122C19.655 7.4852 19.655 6.61917 19.655 5.74648C12.7268 7.1621 6.50471 13.3642 5.50545 21.0851C6.0284 21.0851 6.55134 21.0851 7.11093 21.0851C7.11093 22.7605 7.11093 24.3927 7.11093 26.0448C5.47881 26.0448 3.86334 26.0448 2.21123 26.0448C2.21123 24.4227 2.21123 22.7972 2.21123 21.1084C2.66089 21.1084 3.12721 21.0818 3.59021 21.1151C3.94328 21.1417 4.04653 21.0019 4.10649 20.6721C5.39553 13.5274 9.3526 8.45115 15.9477 5.42339C16.0177 5.39008 16.0843 5.35344 16.2308 5.28016C16.081 5.25685 16.011 5.24019 15.9411 5.24019C12.7934 5.24019 9.64572 5.24352 6.49805 5.23353C6.23824 5.23353 6.12166 5.31347 6.02507 5.55662C5.55542 6.75574 4.27303 7.39526 2.98399 7.09215C1.72159 6.79238 0.905527 5.60992 1.00878 4.2376C1.10205 3.01184 2.13129 2.01925 3.40035 1.93264C4.61611 1.84937 5.59872 2.44227 6.04505 3.56144C6.13166 3.77461 6.24157 3.82124 6.45142 3.82124C8.10686 3.81458 9.7623 3.81791 11.4177 3.81791C14.0258 3.81791 16.6305 3.81791 19.2386 3.81791C19.3485 3.81458 19.4618 3.81458 19.635 3.81458ZM21.0806 2.42561C21.0706 2.55218 21.0573 2.64212 21.0573 2.73205C21.0606 4.01776 21.0706 5.30348 21.0606 6.59252C21.0573 6.87898 21.1439 6.96558 21.4303 6.96225C22.706 6.9456 23.9784 6.95226 25.2542 6.9456C25.3508 6.9456 25.4473 6.92228 25.5373 6.91229C25.5373 5.40007 25.5373 3.9245 25.5373 2.42894C24.0484 2.42561 22.5828 2.42561 21.0806 2.42561ZM42.4214 4.52739C42.4214 5.19356 42.951 5.73649 43.6139 5.74648C44.2601 5.75648 44.8063 5.20022 44.8063 4.53738C44.8063 3.85455 44.2567 3.30829 43.5806 3.31828C42.9444 3.32828 42.4214 3.87454 42.4214 4.52739ZM4.81263 4.53405C4.8093 3.86788 4.26637 3.31495 3.62018 3.32161C2.95734 3.32494 2.42773 3.86121 2.4244 4.52739C2.42107 5.20022 2.94402 5.72983 3.61352 5.73316C4.28303 5.73649 4.81596 5.20355 4.81263 4.53405ZM3.61019 22.5507C3.61019 23.2036 3.60686 23.8231 3.61685 24.4393C3.61685 24.5026 3.71012 24.6192 3.76008 24.6192C4.39961 24.6325 5.03913 24.6258 5.67866 24.6258C5.67866 23.9064 5.67866 23.2335 5.67866 22.5507C4.9925 22.5507 4.32966 22.5507 3.61019 22.5507ZM44.2901 24.6092C44.2901 23.903 44.2901 23.2335 44.2901 22.5574C43.5939 22.5574 42.9244 22.5574 42.2382 22.5574C42.2382 23.2502 42.2382 23.9197 42.2382 24.6092C42.9277 24.6092 43.5972 24.6092 44.2901 24.6092Z"
                fill="#D22227"
                stroke="#D22227"
                stroke-width="0.5"
              />
              <path
                d="M34.464 29.6155C30.9799 31.6506 28.8715 34.6417 28.112 38.6255C28.4818 38.6255 28.8515 38.6255 29.2579 38.6255C29.2579 39.4449 29.2579 40.2209 29.2579 41.0337C29.7708 41.0337 30.2471 41.0337 30.7634 41.0337C30.7734 41.1902 30.7834 41.3101 30.7834 41.43C30.7834 43.4852 30.7801 45.5437 30.7901 47.5988C30.7901 47.8719 30.7301 47.9885 30.4337 47.9885C28.5717 47.9819 26.7097 47.9985 24.8511 47.9985C22.0798 48.0018 19.3119 47.9985 16.5406 47.9985C16.4374 47.9985 16.3374 47.9985 16.2109 47.9985C16.2109 45.6802 16.2109 43.3886 16.2109 41.0637C16.6972 41.0637 17.1735 41.0637 17.6831 41.0637C17.6831 40.2543 17.6831 39.4782 17.6831 38.6588C18.0861 38.6588 18.4592 38.6588 18.8755 38.6588C18.1194 34.6451 16.0043 31.644 12.5136 29.6055C12.86 28.8893 13.1798 28.2165 13.5062 27.547C16.3208 21.7646 19.142 15.9889 21.9499 10.2032C22.1032 9.88341 22.2764 9.77349 22.6228 9.79015C23.2523 9.82013 23.8885 9.81013 24.518 9.79348C24.7679 9.78682 24.8778 9.88674 24.981 10.0999C26.3134 12.8612 27.6557 15.6158 28.998 18.3738C30.7667 22.0044 32.5354 25.6351 34.3041 29.2691C34.3508 29.359 34.3907 29.4523 34.464 29.6155ZM20.3678 38.6221C20.5143 38.6288 20.5943 38.6355 20.6742 38.6355C22.5362 38.6355 24.3981 38.6288 26.2601 38.6421C26.5365 38.6454 26.6265 38.5522 26.6831 38.289C27.0295 36.7369 27.5658 35.2513 28.2852 33.829C29.2345 31.9571 30.7035 30.5548 32.3422 29.3024C32.5221 29.1658 32.632 29.0759 32.4988 28.8061C30.8633 25.4785 29.2445 22.1477 27.6224 18.8135C26.5432 16.5951 25.464 14.3734 24.3815 12.1551C24.3515 12.0918 24.3015 12.0385 24.2083 11.9019C24.2083 12.1384 24.2083 12.275 24.2083 12.4082C24.2083 13.7772 24.2116 15.1429 24.2083 16.5118C24.2016 18.6936 24.1916 20.8753 24.175 23.0603C24.1716 23.4367 24.2349 23.7165 24.6779 23.7831C24.8378 23.8064 24.9877 23.933 25.1243 24.0329C26.1568 24.779 26.5599 26.1181 26.1035 27.2805C25.6305 28.493 24.4181 29.2291 23.149 29.0725C21.9033 28.9193 20.8741 27.9067 20.7208 26.6943C20.5543 25.3719 21.2538 24.1628 22.4795 23.6998C22.6994 23.6166 22.7827 23.5266 22.7827 23.2868C22.776 19.5996 22.7793 15.9089 22.7793 12.2217C22.7793 12.1451 22.7593 12.0685 22.746 11.9919C22.7227 11.9919 22.7027 11.9919 22.6794 11.9919C19.9081 17.6843 17.1368 23.3734 14.3389 29.1192C17.7997 31.3742 19.565 34.695 20.3678 38.6221ZM29.3411 42.4993C29.2212 42.4893 29.1413 42.4793 29.0613 42.4793C25.3508 42.4793 21.6402 42.4826 17.9263 42.4726C17.6498 42.4726 17.6065 42.5825 17.6098 42.819C17.6198 43.9548 17.6132 45.094 17.6132 46.2332C17.6132 46.3331 17.6298 46.433 17.6398 46.5429C21.5536 46.5429 25.4407 46.5429 29.3411 46.5429C29.3411 45.1873 29.3411 43.8616 29.3411 42.4993ZM19.162 41.027C22.0565 41.027 24.9311 41.027 27.8089 41.027C27.8089 40.6973 27.8089 40.3975 27.8089 40.0644C27.6557 40.0644 27.5325 40.0644 27.4092 40.0644C24.9277 40.0644 22.4462 40.0644 19.9647 40.0644C19.0521 40.0644 19.0521 40.0644 19.162 41.027ZM23.5254 24.9389C22.7627 24.9189 22.1565 25.4885 22.1265 26.2513C22.0965 27.0074 22.7094 27.6503 23.4688 27.6636C24.2083 27.6769 24.8345 27.0707 24.8578 26.3246C24.8811 25.5884 24.2782 24.9589 23.5254 24.9389Z"
                fill="#D22227"
                stroke="#D22227"
                stroke-width="0.5"
              />
            </svg>
            <div>
              <p className="advanced_title">Miễn phí thiết kế</p>
              <p className="advanced_dscr">Khi in số lượng lớn</p>
            </div>
            <div className="advanced-colunms"></div>
          </div>
          <div className="col l-3 advanced">
            <svg width="73" height="41" viewBox="0 0 73 41" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.6098 29.1643L36.0137 29.2634C39.0405 35.1795 45.1708 39.2515 52.2727 39.3154C62.4557 39.4049 70.785 31.2259 70.8744 21.0428C70.9639 10.8598 62.7817 2.53376 52.5987 2.44427L2 2" stroke="#ED1C24" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.9969 20.0488L32.8495 20.1799" stroke="#ED1C24" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.42471 10.9142L36.1703 11.1507" stroke="#ED1C24" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M52.2152 8.02798L52.1033 20.8798L58.0834 27.3393" stroke="#ED1C24" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div>
              <p className="advanced_title">In nhanh - tốc độ</p>
              <p className="advanced_dscr">Thời gian in nhanh nhất</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid category">
        <div className="grid wide content">
          <div className="suggest-header__box">
            <h1>Danh mục sản phẩm</h1>
          </div>
          <h2>
            Thiết kế & in ấn
            <br /> cùng <span>Eprint</span>
          </h2>
          <div className="row">
            <div className="col l-4 category-section">
              <div className="category-align">
                <div
                  className="category-item"
                  onClick={() => {
                    const typeSlug = 'lich';
                    handleNavigatetype(typeSlug);
                  }}>
                  <img src={images.calendar} alt="" className="category-item_image"></img>
                  <div className="category__name">Lịch</div>
                </div>
                <div
                  className="category-item"
                  onClick={() => {
                    const typeSlug = 'hop';
                    handleNavigatetype(typeSlug);
                  }}>
                  <img src={images.box} alt="" className="category-item_image"></img>
                  <div className="category__name">Hộp quà</div>
                </div>
              </div>
              <div
                className="category-align"
                onClick={() => {
                  const typeSlug = 'standee';
                  handleNavigatetype(typeSlug);
                }}>
                <div className="category-item">
                  <img src={images.standee} alt="" className="category-item_image"></img>
                  <div className="category__name">Standee</div>
                </div>
                <div
                  className="category-item"
                  onClick={() => {
                    const typeSlug = 'tui-giay';
                    handleNavigatetype(typeSlug);
                  }}>
                  <img src={images.bag} alt="" className="category-item_image"></img>
                  <div className="category__name">Túi giấy</div>
                </div>
              </div>
            </div>
            <div className="col l-4 category-section">
              <div className="category-align">
                <div
                  className="category-item"
                  onClick={() => {
                    const typeSlug = 'card-visit';
                    handleNavigatetype(typeSlug);
                  }}>
                  <img src={images.card} alt="" className="category-item_image"></img>
                  <div className="category__name">Card</div>
                </div>
                <div
                  className="category-item"
                  onClick={() => {
                    const typeSlug = 'brochure';
                    handleNavigatetype(typeSlug);
                  }}>
                  <img src={images.brochure} alt="" className="category-item_image"></img>
                  <div className="category__name">Tờ gấp</div>
                </div>
              </div>
              <div
                className="category-align"
                onClick={() => {
                  const typeSlug = 'so-tay';
                  handleNavigatetype(typeSlug);
                }}>
                <div className="category-item">
                  <img src={images.handbook} alt="" className="category-item_image"></img>
                  <div className="category__name">Sổ tay</div>
                </div>
                <Link to={'/category'} className="category-item">
                  <img src={images.all} alt=""></img>
                  <div className="category__name">Xem tất cả</div>
                </Link>
              </div>
            </div>
            <div className="col l-4">
              <img src={images.women} alt=""></img>
            </div>
          </div>
        </div>
      </div>
      <div className="grid product-design-background">
        <div className="grid wide content">
          <div className="suggest-header__boxs">
            <div className="suggest-header__box">
              <h1 className="center"> Các gói thiết kế </h1>
            </div>
          </div>
          <h2 className="center"> Thiết kế các sản phẩm in ấn </h2>
          <div className="row">
            <div className="col l-4 product">
              <div className="product-design">
                <img src={images.news} alt="" className="product-design_image"></img>
                <div className="product-design_number"> 150 sản phẩm</div>
              </div>
              <div className="product-design_dscr">Nhận diện thương hiệu</div>
            </div>
            <div className="col l-4 product">
              <div className="product-design">
                <img src={images.news} alt="" className="product-design_image"></img>
                <div className="product-design_number"> 150 sản phẩm</div>
              </div>
              <div className="product-design_dscr">Nhận diện thương hiệu</div>
            </div>
            <div className="col l-4 product">
              <div className="product-design">
                <img src={images.news} alt="" className="product-design_image"></img>
                <div className="product-design_number"> 150 sản phẩm</div>
              </div>
              <div className="product-design_dscr">Nhận diện thương hiệu</div>
            </div>
          </div>
          <div className="button-align">
            <button className="animated-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Thiết kế ngay</span>
              <span className="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid product">
        <div className="grid wide content">
          <div>
            <div className="suggest-header__box">
              <h1> Sản phẩm nổi bật </h1>
            </div>
            <div className="suggest"></div>
            <div className="suggest-list__box">
              <h2> Sản phẩm in ấn</h2>
              <ul className="suggest-list">
                <li className={isActive === 'hop-banh-tet' ? 'suggest-item active' : 'suggest-item'} onClick={() => handleClick('hop-banh-tet')}>
                  Hộp bánh Tết
                </li>
                <li className={isActive === 'hop-ruou' ? 'suggest-item active' : 'suggest-item'} onClick={() => handleClick('hop-ruou')}>
                  Hộp rượu
                </li>
                <li className={isActive === 'hop-yen' ? 'suggest-item active' : 'suggest-item'} onClick={() => handleClick('hop-yen')}>
                  Hộp yến
                </li>
                <li className={isActive === 'hop-trung-thu' ? 'suggest-item active' : 'suggest-item'} onClick={() => handleClick('hop-trung-thu')}>
                  Hộp trung thu
                </li>
                <li className={isActive === 'standee' ? 'suggest-item active' : 'suggest-item'} onClick={() => handleClick('standee')}>
                  Standee
                </li>
                <li className="suggest-item" onClick={() => navigate('/category')}>
                  Xem tất cả
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {dataProduct.map((item, index) => (
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
          <div className="button-align">
            <button className="animated-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Tư vấn ngay</span>
              <span className="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid wide content">
        <div className="suggest-header__boxs">
          <div className="suggest-header__box">
            <h1 className="center"> Eprint làm theo</h1>
          </div>
        </div>
        <h2 className="center"> Quy trình làm việc</h2>
        <div className="row">
          <div className="col l-3">
            <div className="step">
              <div className="step-title">01</div>
              <div className="step-dscr">Đặt hàng và liên hệ trực tuyến</div>
            </div>
            <img src={images.w01} alt="" className="step-image"></img>
          </div>
          <div className="col l-3">
            <img src={images.w02} alt="" className="step-image"></img>
            <div className="step">
              <div className="step-title">02</div>
              <div className="step-dscr">EPrint kiểm tra File Thiết kế và chốt phương án In ấn</div>
            </div>
          </div>
          <div className="col l-3">
            <div className="step">
              <div className="step-title">03</div>
              <div className="step-dscr">Gia công sản phẩm và vận chuyển đơn hàng</div>
            </div>
            <img src={images.w03} alt="" className="step-image"></img>
          </div>
          <div className="col l-3">
            <img src={images.w04} alt="" className="step-image"></img>
            <div className="step">
              <div className="step-title">04</div>
              <div className="step-dscr">Bàn giao và CSKH</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid news-background">
        <div className="grid wide content">
          <div className="suggest-header__boxs">
            <div className="suggest-header__box">
              <h1 className="center"> Update news </h1>
            </div>
          </div>
          <h2 className="center"> Tin tức mới nhất </h2>
          <div className="row">
            {blogData?.map((item, index) => (
              <div className="col l-4">
                <div
                  className="news"
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    navigate(`/News-detail/${item._id}`);
                  }}>
                  <img src={item.image} alt="" className="news-img" id="blog-image" style={{ height: '253.33px' }}></img>
                  <div className="news-body">
                    <div className="news-name">{item.title}</div>
                    <p className={`news-dscr-${index} news-dscr`}></p>
                    <div>
                      <ul className="news-list">
                        <li className="news-number">
                          <FaPencilAlt className="news-icon" />
                          EPrint
                        </li>
                        <li className="news-number">
                          <FaRegEye className="news-icon" />
                          1500
                        </li>
                        <li className="news-number">
                          <CiClock2 className="news-icon" />
                          {new Date(item.updatedAt).toISOString().split('T')[0]}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(HomePage);
