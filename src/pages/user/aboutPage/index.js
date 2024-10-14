import { memo, useEffect } from 'react';
import { aboutImg, images, background } from '../../../img/index';
import './style.scss';
import './function-about';
import { handleContentLoaded } from './function-about';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    console.log('using effect');
    handleContentLoaded();
  }, []);

  return (
    <>
      <div className="grid banner">
        <img src={background.aboutBG} alt="" />
        <div className="banner__title">
          Về chúng tôi
          <div className="banner__dscr">
            <span
              onClick={() => {
                navigate('/');
              }}>
              Home
            </span>{' '}
            <div className="banner__space"></div> Về Eprint
          </div>
        </div>
      </div>
      <div className="grid about-background">
        <div className="grid wide about-content">
          <div className="row">
            <div className="col l-6 about-align">
              <img src={images.ab01} alt="" className="about-image_01"></img>
              <img src={images.ab02} alt="" className="about-image_02"></img>
              <img src={images.ab03} alt="" className="about-image_03"></img>
              <img src={images.ab04} alt="" className="about-image_04"></img>
            </div>
            <div className="col l-6">
              <div className="suggest-header__box">
                <h1>Về chúng tôi</h1>
              </div>
              <h2>EPrint là đơn vị hàng đầu tại VN, chuyên cung cấp dịch vụ in ấn và thiết kế đa ngành nghề</h2>
              <div className="about-dscr">
                <span>Với hơn 7 năm kinh nghiệm, chúng tôi đã đồng hành cùng 1000+ doanh nghiệp và thực hiện hơn 3000 dự án về thiết kế và in ấn.</span>
              </div>
              <div className="row">
                <div className="">
                  <div className="about-achievement-align">
                    <p className="about-achievement-number" id="year-count"></p>
                    <p className="about-achievement-dscr">Kinh nghiệm</p>
                  </div>
                </div>
                <div className="">
                  <div className="about-achievement-align">
                    <p className="about-achievement-number" id="client-count"></p>
                    <p className="about-achievement-dscr">Khách hàng</p>
                  </div>
                </div>
                <div className="">
                  <div className="about-achievement-align">
                    <p className="about-achievement-number" id="project-count"></p>
                    <p className="about-achievement-dscr">Dự án</p>
                  </div>
                </div>
              </div>
              <div className="about-info">Các gói dịch vụ in phong phú tại EPrint với giá thành minh bạch giúp khách hàng tối ưu chi phí và đáp ứng nhu cầu in đa dạng của khách hàng. Đội ngũ nhân viên của EPrint luôn nỗ lực, tích cực nâng cao kỹ năng, kinh nghiệm để mang đến cho khách hàng những trải nghiệm sản phẩm, dịch vụ chất lượng nhất.</div>
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
          </div>
        </div>
      </div>
      <div className="grid vision-content">
        <div className="grid wide vision">
          <div className="suggest-header__boxs">
            <div className="suggest-header__box">
              <h1 className="center">vision - MISSION</h1>
            </div>
          </div>
          <h2 className="center">Tầm nhìn - Sứ mệnh</h2>
          <div className="row">
            <div className="col l-4 vision-align">EPrint định hướng trở thành đơn vị chuyên nghiệp hàng đầu và là nguồn cảm hứng sáng tạo trong lĩnh vực in ấn và thiết kế tại Việt Nam</div>
            <div className="col l-4 vision-align">
              <div className="vision-design">
                <img src={aboutImg.vision} alt="" className="vision-design_image"></img>
                <div className="vision-design_widget-left sweep-to-bottom"> </div>
                <div className="vision-design_widget-right sweep-to-bottom"> </div>
              </div>
            </div>
            <div className="col l-4 vision-align">Mang đến những giá trị cho khách hàng thông qua giải pháp Thiết kế sáng tạo - In tiêu chuẩn - Giá cả cạnh tranh</div>
          </div>
        </div>
        <div className="grid wide value">
          <div className="suggest-header__boxs">
            <div className="suggest-header__box">
              <h1 className="center">Core value</h1>
            </div>
          </div>
          <h2 className="center">Giá trị cốt lõi</h2>
          <div className="row">
            <div className="col l-4 value-align">
              <div className="value-item">
                <img src={aboutImg.aboutValue1} alt="" className="value-item_image" />
                <h2 className="value__title">SÁNG TẠO</h2>
                <div className="value__dscr">Thiết kế độc quyền, mang tính thẩm mỹ cao và chuẩn nhận diện thương hiệu</div>
              </div>
              <div className="value-item">
                <img src={aboutImg.aboutValue4} alt="" className="value-item_image" />
                <h2 className="value__title">TỐC ĐỘ</h2>
                <div className="value__dscr">Ứng dụng và triển khai nhanh, tiến độ in và giao hàng đúng hẹn</div>
              </div>
            </div>
            <div className="col l-4 value-align">
              <div className="value-item">
                <img src={aboutImg.aboutValue2} alt="" className="value-item_image" />
                <h2 className="value__title">CHẤT LƯỢNG</h2>
                <div className="value__dscr">Cam kết cung cấp sản phẩm và dịch vụ với chất lượng tốt nhất, đảm bảo sự hài lòng và tin cậy từ phía khách hàng</div>
              </div>
              <div className="value-item">
                <img src={aboutImg.aboutValue5} alt="" className="value-item_image" />
                <h2 className="value__title">LINH HOẠT</h2>
                <div className="value__dscr">Linh hoạt trong việc đáp ứng nhu cầu đa dạng của khách hàng và tối ưu hóa quy trình làm việc để đáp ứng các yêu cầu đặc biệt</div>
              </div>
            </div>
            <div className="col l-4 value-align">
              <div className="value-item">
                <img src={aboutImg.aboutValue3} alt="" className="value-item_image" />
                <h2 className="value__title">TRÁCH NHIỆM</h2>
                <div className="value__dscr">Đảm bảo tuân thủ các tiêu chuẩn đạo đức và môi trường, đồng thời chăm sóc tốt nhất cho khách hàng, nhân viên và cộng đồng</div>
              </div>
              <div className="value-item">
                <img src={aboutImg.aboutValue6} alt="" className="value-item_image" />
                <h2 className="value__title">ĐỔI MỚI</h2>
                <div className="value__dscr">Không ngừng cải tiến và cập nhật các công nghệ mới nhất để tạo nên những thành phẩm chất lượng cao</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid contact-content">
        <div className="grid wide contact">
          <div className="row">
            <div className="col l-6">
              <img src={aboutImg.women} alt="" />
            </div>
            <div className="col l-6 contact-list">
              <div className="suggest-header__box">
                <h1>Contact us</h1>
              </div>
              <h2>Đến ngay với EPrint </h2>
              <div className="contact-align">
                <div className="contact-content">
                  <div className="contact-number">01</div>
                  <div className="contact-dscr">Tạo dấu ấn cho doanh nghiệp</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">02</div>
                  <div className="contact-dscr">Tăng nhận diện thương hiệu trên thị trường</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">03</div>
                  <div className="contact-dscr">Cam kết về sự chuyên nghiệp và đảm bảo về chất lượng sản phẩm cho thương hiệu của doanh nghiệp</div>
                </div>
                <div className="contact-content">
                  <div className="contact-number">04</div>
                  <div className="contact-dscr">Tối ưu chi phí, nguồn lực và tài nguyên cho doanh nghiệp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(AboutPage);
