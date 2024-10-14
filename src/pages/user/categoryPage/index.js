import { memo } from 'react';
import React, { useEffect } from 'react';
import { categoryImg, background } from '../../../img/index';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleNavigatetype = typeSlug => {
    navigate(`/Product-type/${typeSlug}`, { state: typeSlug });
  };
  return (
    <>
      <div className="grid banner">
        <img src={background.categoryBG} alt="" />
        <div className="banner__title">
          Danh mục sản phẩm
          <div className="banner__dscr">
            <span
              onClick={() => {
                navigate('/');
              }}>
              Home
            </span>{' '}
            <div className="banner__space"></div> Danh mục sản phẩm
          </div>
        </div>
      </div>
      <div className="grid category-list">
        <div className="grid wide category-content">
          <div className="row">
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'lich';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate1} alt="" className="category-item_image"></img>
                <div className="category__name">Lịch </div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'catalogue';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate2} alt="" className="category-item_image"></img>
                <div className="category__name">Catalogue</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'profile';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate3} alt="" className="category-item_image"></img>
                <div className="category__name">Profile</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'brochure';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate4} alt="" className="category-item_image"></img>
                <div className="category__name">Brochure</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'hop';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate5} alt="" className="category-item_image"></img>
                <div className="category__name">Hộp</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'standee';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate6} alt="" className="category-item_image"></img>
                <div className="category__name">Standee</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'backdrop';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate7} alt="" className="category-item_image"></img>
                <div className="category__name">Backdrop</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'to-roi';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate8} alt="" className="category-item_image"></img>
                <div className="category__name">Tờ rơi</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'thiep';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate9} alt="" className="category-item_image"></img>
                <div className="category__name">Thiệp</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'voucher';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate10} alt="" className="category-item_image"></img>
                <div className="category__name">Voucher</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'sticker';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate11} alt="" className="category-item_image"></img>
                <div className="category__name">Sticker</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'tem-nhan';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate12} alt="" className="category-item_image"></img>
                <div className="category__name">Tem nhãn</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'tui-giay';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate13} alt="" className="category-item_image"></img>
                <div className="category__name">Túi giấy</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'card-visit';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate14} alt="" className="category-item_image"></img>
                <div className="category__name">Card visit</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'menu';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate15} alt="" className="category-item_image"></img>
                <div className="category__name">Menu</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'thung-carton';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate16} alt="" className="category-item_image"></img>
                <div className="category__name">Thùng carton</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'booth';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate17} alt="" className="category-item_image"></img>
                <div className="category__name">Booth</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'photobooth';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate18} alt="" className="category-item_image"></img>
                <div className="category__name">Photobooth</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'giay-khen';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate19} alt="" className="category-item_image"></img>
                <div className="category__name">Giấy khen</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'so-tay';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate20} alt="" className="category-item_image"></img>
                <div className="category__name">Sổ tay</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'li-xi';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate21} alt="" className="category-item_image"></img>
                <div className="category__name">Lì xì</div>
              </div>
            </div>
            <div className="col l-2-4 category-display">
              <div
                onClick={() => {
                  const typeSlug = 'phong-bi-thu';
                  handleNavigatetype(typeSlug);
                }}
                className="category-item">
                <img src={categoryImg.cate22} alt="" className="category-item_image"></img>
                <div className="category__name">Phong bì thư</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(CategoryPage);
