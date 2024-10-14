import './style.scss';
import { FaCheckCircle } from 'react-icons/fa';
import { memo } from 'react';
import { logoImg, aboutImg, images } from '../../../../img/index';
import { CiClock2 } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
const LogoPage = () => {
  return (
    <>
      <div className="grid wide logo-content">
        <div className="row">
          <div className="col l-6 logo-content_align">
            <div className="logo-content_title1">Nâng tầm thương hiệu cùng</div>
            <div className="logo-content_title2">Logo doanh nghiệp</div>
            <div className="logo-content_dscr">EPrint đồng hành cùng các thương hiệu tạo nên Logo chuyên nghiệp, sáng tạo, nâng cao hình ảnh và vị thế trên thương trường.</div>
            <ul className="logo-content_list">
              <li className="logo-content_list-item">
                <FaCheckCircle />
                Xây dựng Hình ảnh thương hiệu
              </li>
              <li className="logo-content_list-item">
                <FaCheckCircle />
                Xây dựng Nhận diện mạnh mẽ
              </li>
              <li className="logo-content_list-item">
                <FaCheckCircle />
                Nâng cao vị thế cạnh tranh
              </li>
            </ul>
            <div className="button-align about-page">
              <button className="animated-button">
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
                <span className="text">Liên hệ ngay</span>
                <span className="circle"></span>
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="col l-6 ">
            <img src={logoImg.logo1} alt="" className="logo-content_img" />
          </div>
        </div>
      </div>
      <div className="grid logo-advanced_background">
        <div className="grid wide logo-advanced">
          <div className="row">
            <div className="col l-6 ">
              <img src={logoImg.logo3} alt="" />
            </div>
            <div className="col l-6 logo-advanced_align">
              <div className="logo-advanced_title">Tại sao cần thiết kế logo?</div>
              <div className="logo-advanced_dscr">Để tạo điểm nhấn riêng cho thương hiệu, các doanh nghiệp cần chú trọng tới việc thiết kế Logo vì những lợi ích lớn mà nó mang lại:</div>
              <ul className="logo-advanced_list">
                <li className="logo-advanced_list-item">- Khẳng định sự uy tín, chuyên nghiệp</li>
                <li className="logo-advanced_list-item">- Tạo lợi thế cạnh tranh</li>
                <li className="logo-advanced_list-item">- Gia tăng nhận diện thương hiệu</li>
                <li className="logo-advanced_list-item">- Thu hút và giữ chân khách hàng</li>
              </ul>
              <div className="logo-advanced_button">Thiết kế ngay</div>
            </div>
          </div>
          <div className="grid wide value">
            <div className="suggest-header__boxs">
              <div className="suggest-header__box">
                <h1 className="center">Dự án tiêu biểu</h1>
              </div>
            </div>
            <h2 className="center">Our Case Study</h2>
            <div className="row value-align">
              <div className="col l-4 value-align">
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
              </div>
              <div className="col l-4 value-align">
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
              </div>
              <div className="col l-4 value-align">
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
                <div className="value-item">
                  <img src={logoImg.logo4} alt="" />
                </div>
              </div>
            </div>
            <div className="logo-cs_button-align">
              <div className="logo-cs_button">Xem thêm </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide slogan">
        <img src={logoImg.logo5} alt="" />
        <div className="slogan-title">NỀN TẢNG VỮNG CHẮC - KHẲNG ĐỊNH THƯƠNG HIỆU</div>
        <div className="slogan-dscr">Hình ảnh Logo mang tinh thần thương hiệu, thể hiện giá trị cốt lõi của doanh nghiệp là điều mà mọi doanh nghiệp hướng tới.</div>
      </div>
      <div className="grid why-background">
        <div className="grid wide reason">
          <div className="suggest-header__boxs">
            <div className="suggest-header__box">
              <h1 className="center">Why us</h1>
            </div>
          </div>
          <h2 className="center">Lý do chọn EPrint</h2>
          <div className="row">
            <div className="col l-4 value-align">
              <div className="why-item">
                <div className="why-title">Chuyên môn</div>
                <div className="why-dscr">EPrint có hơn 6+ năm hoạt động trong lĩnh vực Thiết kế và In ấn, đồng hành cùng 1000+ doanh nghiệp tạo nên những sản phẩm chất lượng</div>
              </div>
              <div className="why-item">
                <div className="why-title">Nhanh chóng</div>
                <div className="why-dscr">Quy trình hoàn thiện tinh gọn, nhanh chóng, đồng thời khách hàng có thể theo dõi tiến độ dễ dàng, mọi lúc mọi nơi</div>
              </div>
            </div>
            <div className="col l-4 value-align">
              <div className="why-item">
                <div className="why-title">Sáng tạo</div>
                <div className="why-dscr">Đội ngũ chuyên gia sở hữu tư duy thiết kế đột phá, ứng dụng vào các bản Thiết kế độc đáo, mang dấu ấn riêng cho Thương hiệu</div>
              </div>
              <div className="why-item">
                <div className="why-title">Độc quyền</div>
                <div className="why-dscr">Những thiết kế và sản phẩm của EPrint thuộc sở hữu của Thương hiệu, cam kết độc quyền, không sao chép ý tưởng</div>
              </div>
            </div>
            <div className="col l-4 value-align">
              <div className="why-item">
                <div className="why-title">Hiện đại</div>
                <div className="why-dscr">EPrint liên tục cập nhật những xu hướng thiết kế và công nghệ in ấn tiến tiến, hiện đại nhất để đảm bảo chất lượng và đáp ứng nhu cầu khách hàng</div>
              </div>
              <div className="why-item">
                <div className="why-title">Chất lượng</div>
                <div className="why-dscr">EPrint sử dụng vật liệu nguyên sinh, chất lượng, sản phẩm có độ bền cao và đảm bảo an toàn cho người dùng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide service-price">
        <h2 className="center">Bảng giá dịch vụ</h2>
        <div className="row">
          <div className="col l-4 low-spender">
            <div className="service-price_title">6.000.000VNĐ</div>
            <ul className="service-price_list">
              <li className="service-price_item">Thiết kế Logo</li>
              <li className="service-price_item"> Phong bì thư</li>
              <li className="service-price_item"> Thẻ tên</li>
              <li className="service-price_item"> Folder</li>
              <li className="service-price_item"> Website&#40; mẫu sẵn&#41;</li>
              <li className="service-price_item">
                 <span>01 concept</span> thiết kế Logo
              </li>
              <li className="service-price_item">
                <span>Số lần chỉnh sửa: 02</span>
              </li>
              <li className="service-price_item"> Bảo hộ thương hiệu: Không</li>
              <li className="service-price_item"> Hướng dẫn sử dụng Logo</li>
              <li className="service-price_item"> Tư vấn marketing cơ bản miễn phí</li>
              <div className="logo-cs_button-align">
                <div className="logo-cs_button">Xem thêm </div>
              </div>
            </ul>
          </div>
          <div className="col l-4 med-spender">
            <div className="service-price_title">15.000.000VNĐ</div>
            <ul className="service-price_list">
              <li className="service-price_item">Thiết kế Logo</li>
              <li className="service-price_item"> Phong bì thư</li>
              <li className="service-price_item"> Thẻ tên</li>
              <li className="service-price_item"> Folder</li>
              <li className="service-price_item"> Website&#40; mẫu sẵn&#41;</li>
              <li className="service-price_item">Profile</li>
              <li className="service-price_item">
                 <span>03 concept</span> thiết kế Logo
              </li>
              <li className="service-price_item">
                <span>Số lần chỉnh sửa: 03</span>
              </li>
              <li className="service-price_item"> Bảo hộ thương hiệu: Không</li>
              <li className="service-price_item"> Showcase dự án</li>
              <li className="service-price_item"> Hướng dẫn sử dụng Logo</li>
              <li className="service-price_item"> Tư vấn marketing cơ bản miễn phí</li>
              <div className="logo-cs_button-align">
                <div className="logo-cs_button">Xem thêm </div>
              </div>
            </ul>
          </div>
          <div className="col l-4 high-spender">
            <div className="service-price_title">30.000.000VNĐ</div>
            <ul className="service-price_list">
              <li className="service-price_item">Thiết kế Logo</li>
              <li className="service-price_item"> Phong bì thư</li>
              <li className="service-price_item"> Thẻ tên</li>
              <li className="service-price_item"> Folder</li>
              <li className="service-price_item"> Website&#40; mẫu sẵn&#41;</li>
              <li className="service-price_item"> Profile hoặc Catalogue</li>
              <li className="service-price_item"> Bao bì</li>
              <li className="service-price_item">
                 <span>05 concept</span> thiết kế Logo
              </li>
              <li className="service-price_item">
                <span>Số lần chỉnh sửa: 05</span>
              </li>
              <li className="service-price_item"> Bảo hộ thương hiệu: Có</li>
              <li className="service-price_item"> Showcase dự án</li>
              <li className="service-price_item"> Hướng dẫn sử dụng Logo</li>
              <li className="service-price_item"> Tư vấn marketing cơ bản miễn phí</li>
              <li className="service-price_item"> Đào tạo Thương hiệu Doanh nghiệp</li>
              <li className="service-price_item"> PR Dự án trên SEFA Communication </li>
              <div className="logo-cs_button-align">
                <div className="logo-cs_button">Xem thêm </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid contact-content">
        <div className="grid wide logo-design_step">
          <div className="row">
            <div className="col l-6">
              <img src={aboutImg.women} alt="" />
            </div>
            <div className="col l-6 contact-list">
              <h2>Quy trình thiết kế logo</h2>
              <div className="contact-align">
                <div className="contact-content">
                  <div className="contact-number">01</div>
                  <div className="contact-dscr">Tiếp nhận dự án và khảo sát các yêu cầu từ phía khách hàng</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">02</div>
                  <div className="contact-dscr">Đội ngũ nhân viên tư vấn và trao đổi thêm về những ý tưởng thiết kế ấn tượng, phù hợp với lĩnh vực, yêu cầu của doanh nghiệp</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">03</div>
                  <div className="contact-dscr">Tiến hành nghiên cứu thị trường và lựa chọn các vấn đề về ý tưởng cần giải quyết</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">04</div>
                  <div className="contact-dscr">Phác thảo bản vẽ và brainstorm cùng đội ngũ để lựa chọn ý tưởng cuối cùng</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">05</div>
                  <div className="contact-dscr">Gửi bản thiết kế cho khách hàng duyệt và trao đổi, hỗ trợ chỉnh sửa nếu cần</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">06</div>
                  <div className="contact-dscr">Bàn giao các file thiết kế gốc và khách hàng quyết toán phần chi phí còn lại</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid wide main-customer">
        <h2 className="center">Khách hàng tiêu biểu</h2>
        <img src={logoImg.logo2} alt="" />
      </div>
      <div className="grid news-background">
        <div className="grid wide content">
          <h2 className="center"> Cẩm nang thương hiệu </h2>
          <div className="row">
            <div className="col l-4">
              <div className="news">
                <img src={images.news} alt="" className="news-img"></img>
                <div className="news-body">
                  <div className="news-name">Thiết kế và in ấn Menu ở đâu đẹp và chất lượng?</div>
                  <p className="news-dscr">Menu có vai trò vô cùng quan trọng và là thứ không thể thiếu trong các nhà hàng,...</p>
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
                        15.10.2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4">
              <div className="news">
                <img src={images.news} alt="" className="news-img"></img>
                <div className="news-body">
                  <div className="news-name">Thiết kế và in ấn Menu ở đâu đẹp và chất lượng?</div>
                  <p className="news-dscr">Menu có vai trò vô cùng quan trọng và là thứ không thể thiếu trong các nhà hàng,...</p>
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
                        15.10.2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-4">
              <div className="news">
                <img src={images.news} alt="" className="news-img"></img>
                <div className="news-body">
                  <div className="news-name">Thiết kế và in ấn Menu ở đâu đẹp và chất lượng?</div>
                  <p className="news-dscr">Menu có vai trò vô cùng quan trọng và là thứ không thể thiếu trong các nhà hàng,...</p>
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
                        15.10.2024
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logo-cs_button-align">
            <div className="logo-cs_button">Xem thêm </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(LogoPage);
