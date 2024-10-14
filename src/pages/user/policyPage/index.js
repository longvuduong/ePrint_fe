import './style.scss';
import { policyImg } from '../../../img/index';
import { useEffect } from 'react';
const PolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="grid policy-background">
        <div className="grid wide policy-content">
          <h2>CHÍNH SÁCH</h2>
          <div className="row">
            <div className="col l-4">
              <div className=" policy-content_summary">
                <ul className="sidebar">
                  <li>
                    <ul className="summary_list">
                      <div className="summary_list-align">
                        <img src={policyImg.pol1} alt="" />
                        Quy trình đặt hàng
                      </div>
                      <li>Quy trình đặt hàng chung</li>
                      <li>Quy trình đặt đơn hàng thiết kế</li>
                      <li> Quy trình đặt đơn hàng in ấn</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="summary_list">
                      <div className="summary_list-align">
                        <img src={policyImg.pol2} alt="" />
                        Vận chuyển
                      </div>
                      <li>Thời gian vận chuyển</li>
                      <li>Chi phí vận chuyển</li>
                      <li>Theo dõi đơn hàng</li>
                      <li>Xử lý đơn hàng</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="summary_list">
                      <div className="summary_list-align">
                        <img src={policyImg.pol3} alt="" />
                        Thanh toán
                      </div>
                      <li>Quy trình thanh toán</li>
                      <li>Hình thức thanh toán</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="summary_list">
                      <div className="summary_list-align">
                        <img src={policyImg.pol4} alt="" />
                        Đổi trả
                      </div>
                      <li>Trường hợp chấp nhận đổi trả</li>
                      <li>Trường hợp không chấp nhận đổi trả</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="summary_list">
                      <div className="summary_list-align">
                        <img src={policyImg.pol5} alt="" />
                        Khiếu nại
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-8 policy-content_detail">
              <div className="summary_list-align" id="section1">
                <img src={policyImg.pol1} alt="" />
                QUY TRÌNH ĐẶT HÀNG
              </div>
              <ul className="detail_list">
                <li className="detail_item">
                  Quy trình đặt hàng chung
                  <ul className="detail_item-step">
                    <li>
                      <span>Bước 1: Tư vấn</span>
                      <br />
                      Quý khách hàng tham khảo các sản phẩm trên website, có thể liên hệ trực tiếp EPrint để được tư vấn về số lượng, quy cách, chất lượng, kích thước,... phù hợp với từng sản phẩm.
                    </li>
                    <li>
                      <span>Bước 2: Xác nhận & Chốt đơn</span>
                      <br />
                      Sau khi khách hàng đã được tư vấn cụ thể, EPrint xác nhận lại thông tin và Quý khách sẽ chốt lại để EPrint nắm rõ và lên đơn hàng.
                    </li>
                    <li>
                      <span>Bước 3: Thanh toán</span>
                      <br />
                      Quý khách hàng tiến hành đặt cọc tạm ứng 50% hoặc thanh toán 100% và thanh toán phần còn lại theo như đơn hàng đã ký kết.
                    </li>
                    <li>
                      <span>Bước 4: Giao hàng</span>
                      <br />
                      Sau khi hoàn tất đơn hàng, EPrint sẽ chủ động liên hệ thông báo phí vận chuyển (cap màn hình) và tiến hành giao hàng theo thời gian yêu cầu.
                    </li>
                  </ul>
                </li>
                <li className="detail_item">
                  Quy trình đặt đơn hàng thiết kế
                  <ul className="detail_item-step">
                    <li>
                      <span>Bước 1: </span>
                      Quý khách cung cấp các thông tin, yêu cầu cụ thể cho thiết kế. Tại bước này, EPrint sẽ cung cấp các biểu mẫu để việc thu thập thông tin được nhanh chóng, thuận lợi.
                    </li>
                    <li>
                      <span>Bước 2: </span>
                      EPrint và Quý khách thống nhất các yêu cầu, đơn giá và ký kết hợp đồng.
                    </li>
                    <li>
                      <span>Bước 3: </span>
                      EPrint thành lập nhóm triển khai dự án để nghiên cứu và đưa ra plan thực hiện dự án.
                    </li>
                    <li>
                      <span>Bước 4: </span>
                      Nhóm triển khai dự án của EPrint tiến hành sáng tạo phương án và trình Quý khách phản hồi và phê duyệt.
                    </li>
                    <li>
                      <span>Bước 5: </span>
                      Sau khi nhận được phản hồi từ Quý khách, nhóm thực hiện dự án tiến hành hiệu chỉnh cho tới khi Quý khách hài lòng với phương án.
                    </li>
                    <li>
                      <span>Bước 6: </span>
                      EPrint tiến hành quy chuẩn, lập hồ sơ thiết kế, hoàn tất hợp đồng để bàn giao File cho Quý khách.
                    </li>
                  </ul>
                </li>
                <li className="detail_item">
                  Quy trình đặt đơn hàng in ấn
                  <ul className="detail_item-step">
                    <li>
                      <span>Bước 1: </span>
                      Quý khách hàng cung cấp các yêu cầu in ấn (Quy cách, kích thước, chất liệu, màu sắc,...) hoặc file thiết kế gốc (PDF/ AI) đã có để EPrint tiếp nhận (nếu chưa có cần triển khai đơn hàng thiết kế).
                    </li>
                    <li>
                      <span>Bước 2: </span>
                      Quý khách hàng và EPrint thống nhất đơn giá, ký kết hợp đồng và thực hiện đặt cọc theo như hợp đồng đã ký kết.{' '}
                    </li>
                    <li>
                      <span>Bước 3: </span>
                      EPrint gửi sản phẩm mẫu (in test) để khách hàng kiểm tra và đối soát (Áp dụng cho đơn hàng giá trị lớn).
                    </li>
                    <li>
                      <span>Bước 4: </span>
                      Chốt sản phẩm mẫu và tiến hành sản xuất hàng loạt.
                    </li>
                    <li>
                      <span>Bước 5: </span>
                      Sau khi gia công xong thành phẩm, EPrint sẽ thông báo với khách hàng để tiến hành giao hàng và hoàn tất hợp đồng.
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="summary_list-align" id="section2">
                <img src={policyImg.pol2} alt="" />
                CHÍNH SÁCH VẬN CHUYỂN
              </div>
              <ul className="detail_list">
                <li className="detail_item">
                  Thời gian vận chuyển
                  <ul className="detail_item-step">
                    <li>
                      <span>Hình thức vận chuyển: </span>
                      EPrint thực hiện giao hàng qua các đơn vị cung cấp dịch vụ vận chuyển như: Giao hàng nhanh, GHTK, Viettel Post, Bưu điện, Ahamove, Grab, Be,....
                    </li>
                    <li>
                      <span>Thời gian vận chuyển: </span>
                      <p>
                        - Khu vực nội thành Hà Nội: Giao hàng trong ngày;
                        <br />- Khu vực ngoại thành và các tỉnh thành khác trên toàn quốc: <br />
                        <p className="paragraph">
                          + Thời gian dự kiến từ 02 đến 05 ngày kể từ thời điểm đơn hàng được giao cho đơn vị vận chuyển, tùy thuộc vào số lượng hàng, loại sản phẩm và địa điểm giao hàng. <br /> + Đối với các đơn hàng có địa chỉ nhận hàng nằm ngoài trung tâm, tỉnh, thị xã, thị trấn,... vui lòng cộng thêm 1 - 2 ngày so với thời gian quy định tính theo khu vực. <br />+ Chúng tôi cam kết giao nhận
                          đơn hàng đúng thời gian yêu cầu và lịch đã hẹn. Tuy nhiên trong các trường hợp bất khả kháng như thiên tai, cháy nổ, tắc đường, do các yêu cầu của nhà chức trách, hoặc do công ty vận chuyển,... thời gian giao hàng có thể bị trễ tiến độ, kính mong Quý khách thông cảm.
                        </p>
                      </p>
                    </li>
                    <li>
                      <span>Quá trình vận chuyển:</span>
                      <p>
                        - Đơn hàng của Quý khách sẽ được giao tối đa trong 02 lần. Trường hợp lần đầu giao hàng không thành công, đơn vị vận chuyển sẽ liên hệ để sắp xếp lịch giao hàng lần 2 với Quý khách. Trong trường hợp vẫn không thể liên lạc lại được hoặc không nhận được bất kỳ phản hồi nào từ phía Quý khách, đơn hàng sẽ không còn hiệu lực. <br /> - Nếu sau 02 lần giao hàng không thành công,
                        đơn hàng của Quý khách sẽ được giữ tại EPrint hoặc văn phòng công ty chuyển phát nhanh trong 02 ngày làm việc tiếp theo để quý khách đến nhận – phí vận chuyển. Trong trường hợp này, Quý khách vui lòng thanh toán phí vận chuyển phát sinh của đơn hàng. <br /> - Quá thời gian trên, đơn hàng sẽ được lưu tại công ty, khách hàng có thể ghé trụ sở của xưởng in EPrint để nhận hàng.
                        Nếu khách hàng không nhận sản phẩm, Quý khách đền bù chi phí thiệt hại cho EPrint theo như hợp đồng đã ký kết.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="detail_item">
                  Chi phí vận chuyển
                  <ul className="detail_item-step">
                    <li>
                      - Khu vực nội thành TP. Hà Nội: Miễn phí vận chuyển nếu đặt với số lượng lớn
                      <br />
                      (Tổng hóa đơn trên 30.000.000 VNĐ)
                    </li>
                    <li>- Khu vực ngoại thành TP. Hà Nội và các tỉnh thành khác: Phí vận chuyển sẽ được tính dựa trên mức phí vận chuyển của đơn vị thứ 3 chuyên nhận vận chuyển hàng hóa. Cụ thể, mức phí vận chuyển EPrint sẽ thông báo cho khách hàng trong quá trình đặt hàng và được thống nhất theo sự thỏa thuận giữa 02 bên</li>
                  </ul>
                </li>
                <li className="detail_item">
                  Theo dõi đơn hàng
                  <ul className="detail_item-step">
                    <li>Để kiểm tra thông tin hoặc tình trạng đơn hàng của Quý khách, xin vui lòng sử dụng Mã số đơn hàng đã được gửi cho Quý khách trên các đơn vị vận chuyển hoặc kiểm tra với bộ phận Chăm sóc khách hàng thông qua số Hotline: 0869.596.313 hoặc Email: inan.eprint@gmail.com.</li>
                  </ul>
                </li>
                <li className="detail_item">
                  Xử lý đơn hàng
                  <ul className="detail_item-step">
                    <li>Khi Quý khách hàng nhận được sản phẩm và có thắc mắc về sản phẩm, xin vui lòng thông báo lại với EPrint hoặc nhân viên chăm sóc để xử lý vấn đề kịp thời.</li>
                  </ul>
                </li>
              </ul>
              <div className="summary_list-align" id="section3">
                <img src={policyImg.pol3} alt="" />
                CHÍNH SÁCH THANH TOÁN
              </div>
              <ul className="detail_list">
                <li className="detail_item">
                  Quy trình thanh toán
                  <ul className="detail_item-step">
                    <li>
                      <span>Đơn hàng thiết kế</span>
                      <br />
                      - Đặt cọc 50% hoặc thanh toán 100% giá trị đơn hàng sau khi 02 bên thống nhất thông tin và yêu cầu thiết kế. <br />- Thanh toán 50% còn lại của đơn hàng sau khi chốt khung thiết kế.
                    </li>
                    <li>
                      <span>Đơn hàng in ấn</span>
                      <br />- Đặt cọc 50% giá trị đơn hàng khi hai bên chốt được quy cách sản phẩm <br /> (kích thước, màu sắc, gia công, chất liệu,...). <br />- Thanh toán nốt 50% giá trị đơn hàng ngay sau khi hoàn thành sản xuất, EPrint sẽ gửi video - hình ảnh sản phẩm hoàn thiện để xác nhận với khách hàng.
                    </li>
                  </ul>
                </li>
                <li className="detail_item">
                  Hình thức thanh toán
                  <ul className="detail_item-step">
                    <li>Để khách hàng thuận tiện trong việc đặt cọc, thanh toán đơn hàng cũng như tránh các đối tượng xấu giả danh EPrint để lừa đảo khách hàng, EPrint xác nhận chỉ sử dụng 01 tài khoản công ty và 01 tài khoản cá nhân (Đã được ủy quyền của EPrint) để giao dịch.</li>
                  </ul>
                </li>
              </ul>
              <div className="summary_list-align" id="section4">
                <img src={policyImg.pol4} alt="" />
                CHÍNH SÁCH ĐỔI TRẢ
              </div>
              <ul className="detail_list">
                <li className="detail_item">
                  Trường hợp chấp nhận đổi trả
                  <ul className="detail_item-step">
                    <li>
                      EPrint áp dụng chính sách đổi trả hàng cho khách hàng với điều kiện: <br />
                      <p className="paragraph">
                        - Sản phẩm vẫn còn nguyên vẹn, chưa qua sử dụng và không bị hư hỏng do khách hàng gây ra; <br />- Sản phẩm được xác định là bị lỗi kỹ thuật, hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt tại thời điểm đặt hàng; Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ,… ngay từ khi nhận hàng; <br />- Khách hàng phát hiện các ấn phẩm bên trong kiện hàng
                        có dấu hiệu móp méo, không còn nguyên vẹn, rách, móp méo, sai thông tin hoặc sản phẩm,...; <br />- Khi đổi trả sản phẩm khách hàng phải cung cấp được các giấy tờ: Hóa đơn VAT, chứng từ mua hàng,... để hoàn thành việc hoàn trả/ đổi trả hàng hóa. <br /> + Thời gian thông báo đổi trả: Trong vòng 48h kể từ khi nhận sản phẩm. <br />+ Thời gian gửi chuyển trả sản phẩm: Trong vòng
                        05 ngày kể từ khi nhận sản phẩm. <br /> + Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="detail_item">
                  Trường hợp không chấp nhận đổi trả
                  <ul className="detail_item-step">
                    <li>
                      EPrint xin từ chối đổi trả hàng hóa trong các trường hợp sau:
                      <p className="paragraph">
                        - Khách hàng muốn đổi sang mẫu mã khác nhưng không có thông báo trước. <br />
                        - Khách hàng sử dụng sản phẩm không đúng cách dẫn tới hư hỏng. <br />- Khách hàng không thực hiện đúng theo các quy định của EPrint để được hưởng bảo hành, đổi trả hàng.
                      </p>
                    </li>
                    <p className="repay_notice">
                      {' '}
                      Lưu ý: <br />
                    </p>
                    <p className="repay_notice-dscr">
                      - Các sản phẩm in ấn không thể giống 100% bản mẫu hoặc file thiết kế nên EPrint sẽ không chấp nhận với lý do không thích hoặc không giống y hệt bản mẫu. <br />- Quý khách hàng quay video lại sau khi nhận được bưu kiện để đánh giá hoặc giải quyết các vấn đề khiếu nại sau này. <br /> - Trong trường hợp Quý khách hàng có ý kiến đóng góp/ khiếu nại liên quan đến chất lượng sản
                      phẩm, Quý khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của EPrint.
                    </p>
                  </ul>
                </li>
              </ul>
              <div className="summary_list-align" id="section5">
                <img src={policyImg.pol5} alt="" />
                CHÍNH SÁCH XỬ LÝ KHIẾU NẠI
              </div>
              <span className="policy_complain">
                Tiếp nhận mọi ý kiến khiếu nại của khách hàng theo thông tin cụ thể như sau:
                <p className="paragraph">
                  - Tất cả các sản phẩm của chúng tôi được bảo hành Quý khách có thể liên hệ trực tiếp với Hotline: 0869.596.313 để được tư vấn hỗ trợ về việc bảo hành (nếu có).
                  <br />- Nếu EPrint làm sai hay lỗi sản phẩm do Quý khách yêu cầu, chúng tôi có thể đền bù chi phí hoặc gia công lại sản phẩm với số lượng tương ứng với số hàng lỗi trả cho Quý khách.
                  <br />- Nếu có bất kỳ thắc mắc hay khiếu nại nào về hàng hóa, dịch vụ, việc giao sản phẩm, thái độ của nhân viên giao hàng, việc đổi trả sản phẩm,… khách hàng có thể liên hệ với Trung tâm CSKH của EPrint theo số Hotline: 0869.596.313 hoặc Email: cskh.eprint@gmail.com.
                  <br />- Khi liên hệ khiếu nại, khách hàng phải cung cấp được mã đơn hàng được EPrint cung cấp trên hệ thống hoặc Email gửi cho khách hàng. Bộ phận CSKH sẽ tiếp nhận và phản hồi lại cho Quý khách trong thời gian sớm nhất. Thời gian Quý khách khiếu nại là 48h kể từ khi nhận hàng.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PolicyPage;
