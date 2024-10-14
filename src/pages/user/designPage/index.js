import { memo, useEffect } from 'react';
import { designImg } from '../../../img/index';
import './style.scss';
const DesignPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="grid design-pack_background">
        <div className="grid wide design-pack">
          <div className="design-pack_title">
            <span>Gói </span>thiết kế
          </div>
          <div className="row design-pack_align">
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Nhận diện thương hiệu</div>
                <img src={designImg.des1} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Nhận diện sản phẩm</div>
                <img src={designImg.des2} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Nhận diện văn phòng</div>
                <img src={designImg.des3} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
          <div className="row design-pack_align">
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Nhận diện ngoài trời</div>
                <img src={designImg.des4} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Ấn phẩm truyền thông</div>
                <img src={designImg.des5} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-4 design-pack_item">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Ấn phẩm sự kiện</div>
                <img src={designImg.des6} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="grid wide design-pack_product">
          <div className="design-pack_title">
            <span>Sản phẩm </span>thiết kế
          </div>
          <div className="row design-pack_align">
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế logo</div>
                <img src={designImg.des7} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế lịch tết</div>
                <img src={designImg.des8} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế catalogue</div>
                <img src={designImg.des9} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế profile</div>
                <img src={designImg.des10} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
          <div className="row design-pack_align">
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế brochure</div>
                <img src={designImg.des11} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế bao bì</div>
                <img src={designImg.des12} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế hộp quà</div>
                <img src={designImg.des13} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế standee</div>
                <img src={designImg.des14} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
          <div className="row design-pack_align">
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế backdrop</div>
                <img src={designImg.des15} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế tờ rơi</div>
                <img src={designImg.des16} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế thiệp mời</div>
                <img src={designImg.des17} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế voucher</div>
                <img src={designImg.des18} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
          <div className="row design-pack_align">
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế sticker</div>
                <img src={designImg.des19} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế tem nhãn</div>
                <img src={designImg.des20} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế túi</div>
                <img src={designImg.des21} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế card visit</div>
                <img src={designImg.des22} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
          <div className="row design-pack_align">
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế menu</div>
                <img src={designImg.des23} alt="" className="design-pack_image"></img>
              </div>
            </div>
            <div className="col l-3">
              <div className="design-pack_content">
                <div className="design-pack_number"> 150 sản phẩm</div>
                <div className="design-pack_dscr">Thiết kế lì xì</div>
                <img src={designImg.des24} alt="" className="design-pack_image"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(DesignPage);
