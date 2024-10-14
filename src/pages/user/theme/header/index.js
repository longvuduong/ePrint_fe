import { memo, useEffect, useRef, useState } from 'react';
import './style.scss';
import { BsHandbag, BsPerson } from 'react-icons/bs';
import { GrMenu } from 'react-icons/gr';
import { FaArrowRight } from 'react-icons/fa';
import { GoTriangleDown } from 'react-icons/go';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTERS } from '../../../../utils/router';
import { images } from '../../../../img/index';
import { Popover } from 'antd';
import * as UserService from '../../../../services/UserService';

const Header = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);
  useEffect(() => {
    const handleClickOutside = event => {
      // Kiểm tra xem có click bên ngoài phần tử menu không
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Nếu không, đặt isShowCategories về false
        setShowCategories(false);
      }
    };

    // Thêm sự kiện click toàn cục
    document.addEventListener('click', handleClickOutside);

    return () => {
      // Loại bỏ sự kiện khi component unmount
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [isShowCategories, setShowCategories] = useState(false);
  const [search, setSearch] = useState('');
  const [menus] = useState([
    {
      name: 'Về Eprint',
      path: '',
      isShowSubmenu: false,
      child: [
        {
          name: 'Giới thiệu',
          path: ROUTERS.USER.ABOUT.PATH,
        },
        {
          name: 'Tuyển dụng',
          path: ROUTERS.USER.ABOUT.RECRUIT.PATH,
        },
      ],
    },
    {
      name: 'Thiết kế',
      path: ROUTERS.USER.DESIGN.PATH,
      isShowSubmenu: false,
      child: [
        {
          name: 'Thiết kế thương hiệu',
          path: '',
          isShowSubmenu: false,
          children: [
            {
              name: 'Logo',
              path: '/logo',
            },
            {
              name: 'Catalogue',
              path: '/logo',
            },
            {
              name: 'Profile',
              path: '/logo',
            },
            {
              name: 'Brochure/Tờ gấp',
              path: '/logo',
            },
            {
              name: 'Bao bì',
              path: '/logo',
            },
            {
              name: 'Hộp quà',
              path: '/logo',
            },
            {
              name: 'Standee',
              path: '/logo',
            },
            {
              name: 'Backdrop',
              path: '/logo',
            },
            {
              name: 'Tờ rơi',
              path: '/logo',
            },
            {
              name: 'Thiệp mời/Thư cảm ơn',
              path: '/logo',
            },
            {
              name: 'Voucher',
              path: '/logo',
            },
            {
              name: 'Sticker',
              path: '/logo',
            },
            {
              name: 'Tem nhãn',
              path: '/logo',
            },
            {
              name: 'Túi',
              path: '/logo',
            },
            {
              name: 'Card visit',
              path: '/logo',
            },
            {
              name: 'Menu',
              path: '/logo',
            },
            {
              name: 'Lì xì',
              path: '/logo',
            },
          ],
        },
        {
          name: 'Gói thiết kế',
          path: '',
          isShowSubmenu: false,
          children: [
            {
              name: 'Nhận diện thương hiệu cốt lõi',
              path: '',
            },
            {
              name: 'Nhận diện sản phẩm',
              path: '',
            },
            {
              name: 'Nhận diện văn phòng',
              path: '',
            },
            {
              name: 'Nhận diện ngoài trời',
              path: '',
            },
            {
              name: 'Ấn phẩm truyền thông',
              path: '',
            },
            {
              name: 'Ấn phẩm sự kiện',
              path: '',
            },
          ],
        },
      ],
    },
    {
      name: 'Dự án',
      path: '',
    },
    {
      name: 'Tài nguyên',
      path: '',
      isShowSubmenu: false,
      child: [
        {
          name: 'Bộ sưu tập ',
          path: '',
          isShowSubmenu: false,
          children: [
            {
              name: 'Dược phẩm',
              path: '/collection/66141c7edeff5f903e98748f',
            },
            {
              name: 'FMCG',
              path: '/collection/6614a7fba4ddaa4155fa9910',
            },
            {
              name: 'Hạt',
              path: '/collection/66141f94deff5f903e9874b1',
            },
            {
              name: 'Nông sản',
              path: '/collection/66141ed9deff5f903e9874a8',
            },
            {
              name: 'Thực phẩm',
              path: '/collection/66141fb5deff5f903e9874b6',
            },
          ],
        },
        {
          name: 'Tin tức',
          path: '/news',
        },
      ],
    },
    {
      name: 'Chính sách',
      path: ROUTERS.USER.POLICY,
    },
  ]);
  const handleLogout = async () => {
    await UserService.logoutUser();
    localStorage.removeItem('user');
    setUser(null);
  };
  const handleNavigatetype = typeSlug => {
    navigate(`/Product-type/${typeSlug}`, { state: typeSlug });
  };
  const content = (
    <div>
      <p
        style={{ cursor: 'pointer' }}
        onClick={() => {
          navigate('/profile');
        }}
        onMouseEnter={e => {
          e.target.style.color = '#e00202';
        }}
        onMouseLeave={e => {
          e.target.style.color = 'black';
        }}>
        Hồ sơ
      </p>
      {user?.isAdmin && (
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => {
            navigate('/system/admin');
          }}
          onMouseEnter={e => {
            e.target.style.color = '#e00202';
          }}
          onMouseLeave={e => {
            e.target.style.color = 'black';
          }}>
          Quản lý hệ thống
        </p>
      )}
      <p
        style={{ cursor: 'pointer' }}
        onClick={handleLogout}
        onMouseEnter={e => {
          e.target.style.color = '#e00202';
        }}
        onMouseLeave={e => {
          e.target.style.color = 'black';
        }}>
        Đăng xuất
      </p>
    </div>
  );

  const handleNavigateSearch = search => {
    navigate(`/search/${search}`, { state: search });
  };
  const onSearch = e => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className="grid wide header__top">
        <div className="row container">
          <Link to={'/'} className="col l-3 logo-align">
            <img src={images.logo} alt="" />
          </Link>
          <div className="col l-6 search">
            <form action="" className="row">
              <div className="group">
                <input type="text" placeholder="Nhập từ khóa cần tìm" onChange={onSearch}></input>
                <button type="submit" className="button-submit" onClick={() => handleNavigateSearch(search)}>
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
          <div className="col l-3 header__top-right">
            <ul>
              <li>
                <BsHandbag className="header__top-icon" />
                <span>0</span>
              </li>
              <div className="header__top-align">
                <li>
                  <BsPerson className="header__top-icon" />
                </li>
                {user?.name ? (
                  <Popover content={content} trigger="click">
                    <div className="user-detail">{user.name}</div>
                  </Popover>
                ) : (
                  <Link to={'/login'} className="text">
                    Đăng nhập
                  </Link>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid header__bottom">
        <div className="grid wide ">
          <div className="row navbar">
            <div className="col l-3 navbar__item">
              <div className="header__menu__category" onClick={() => setShowCategories(!isShowCategories)} ref={menuRef}>
                <GrMenu />
                SẢN PHẨM IN ẤN
              </div>
              {isShowCategories && (
                <ul className={isShowCategories ? 'header__menu__category-list' : 'hidden'}>
                  <li className="header__menu__category-item">
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.88208 16.8242V19.3735H21.9999V8.82399V6.28281V2.25562H4.88208V5.32093V6.28281" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.88205 2.25562C4.88205 2.25562 5.58819 12.2752 1 16.8242H18.1755C18.1755 16.8242 21.379 14.0008 21.9988 8.82399" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.82104 6.28281H21.9988" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.80322 1V3.51008" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M13.4399 1V3.51008" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.0776 1V3.51008" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'lich';
                        handleNavigatetype(typeSlug);
                      }}>
                      Lịch
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5.68295H1V24.5H20V5.68295Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.3848 7.31641H3.85449V16.1321H17.3848V7.31641Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.16602 10.255H9.63581" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.16602 12.0527H14.8019" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.16602 13.8504H14.8019" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.385 5.68294V2.90644L1 5.68294L13.7821 1L13.6915 3.53126" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'catalogue';
                        handleNavigatetype(typeSlug);
                      }}>
                      Catalogue
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8.61728V25.5329L15.3765 20.8045V8.3786V6.59259V3.88889L12.2778 4.9074" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.3765 6.59262L17.7942 6.25311V8.33953V23.1688L1 25.5329V8.61731" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1 8.61727V25.5329L20 25.2181V8.30246L17.7942 8.3395" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.00195 25.5329V8.61728L12.2777 1V17.9156L1.00195 25.5329Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'profile';
                        handleNavigatetype(typeSlug);
                      }}>
                      Profile
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.78235 17.1377H1V1H12.2176V3.54371" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18 3.5437H6.7832V19.6814H18V3.5437Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.7832 3.54371L12.2177 1" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M16.6583 7.01917H8.12402V11.2728H16.6583V7.01917Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.12402 13.6075H16.6583" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.12402 15.4424H16.6583" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'brochure';
                        handleNavigatetype(typeSlug);
                      }}>
                      Brochure/Tờ gấp
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.5338 3.61864H1V19.1525H16.5338V3.61864Z" stroke="#231F20" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20 16.1966L16.5339 19.1525V3.61864L20 0.662781V16.1966Z" stroke="#231F20" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.9999 0.662781H4.17983L1 3.61864" stroke="#231F20" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.76689 15.1163C10.8273 15.1163 12.4976 13.446 12.4976 11.3856C12.4976 9.32512 10.8273 7.6548 8.76689 7.6548C6.70645 7.6548 5.03613 9.32512 5.03613 11.3856C5.03613 13.446 6.70645 15.1163 8.76689 15.1163Z" stroke="#231F20" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'hop';
                        handleNavigatetype(typeSlug);
                      }}>
                      Hộp
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.4655 1H1V21.1114H14.4655V1Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.7581 3.08372H2.70728V19.0277H12.7581V3.08372Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.28711 7.04948H10.0963" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.28711 9.72964H10.0963" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.28711 12.4098H10.0963" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.57178 21.1114V25.5172" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.84839 21.1114V25.5172" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.67603 25.5172H11.7909" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'standee';
                        handleNavigatetype(typeSlug);
                      }}>
                      Standee
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 2.42134H20.3101" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.78123 2.42134V17.6797L2.08789 20.3465H19.1109L17.5436 17.8057V2.42134" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.1111 1.33336V18.1872" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.15601 1V17.8538" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'backdrop';
                        handleNavigatetype(typeSlug);
                      }}>
                      Backdrop
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.6776 19.1502H18.9999V1H4.32422V4.79749" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.6777 4.79749H1V22.9497H15.6777V4.79749Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.64355 9.54332H13.308" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.64355 12.6949H13.308" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M3.64355 15.8464H13.308" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'to-roi';
                        handleNavigatetype(typeSlug);
                      }}>
                      Tờ rơi
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 5.95865V16.4491H1V12.2842C1.65587 12.2842 2.18769 11.7524 2.18769 11.0965C2.18769 10.4406 1.65587 9.9088 1 9.9088V5.95865H21Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.27197 16.4491L11.1838 21.2883L19.0473 16.4491" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.22681 5.95865L5.3821 4.05996C5.69912 4.58718 6.38486 4.75833 6.91208 4.4413C7.4393 4.12313 7.61045 3.43855 7.29228 2.91133L10.4705 1L13.4535 5.95865" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M4.90649 6.59499V15.4808" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.3933 10.7866C11.1628 10.7866 11.7866 10.1628 11.7866 9.39329C11.7866 8.6238 11.1628 8 10.3933 8C9.6238 8 9 8.6238 9 9.39329C9 10.1628 9.6238 10.7866 10.3933 10.7866Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M15.3933 14.7866C16.1628 14.7866 16.7866 14.1628 16.7866 13.3933C16.7866 12.6238 16.1628 12 15.3933 12C14.6238 12 14 12.6238 14 13.3933C14 14.1628 14.6238 14.7866 15.3933 14.7866Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.40454 15.088L16.0884 7.60005" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'voucher';
                        handleNavigatetype(typeSlug);
                      }}>
                      Voucher
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 8.98337C21 15.4067 15.7933 20.6135 9.36991 20.6135C9.27135 20.6135 9.17279 20.6119 9.07577 20.6104C8.17487 20.5873 7.30015 20.4625 6.46239 20.2469C6.46239 20.2469 6.46239 20.2469 6.46085 20.2469C3.21452 18.5375 1 15.1311 1 11.2087C1 5.57072 5.57072 1 11.2071 1C15.8102 1 19.7018 4.04766 20.9754 8.23493C20.9923 8.48287 21 8.73235 21 8.98337Z"
                        stroke="#ED1C24"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21 8.98337C21 15.4067 15.7933 20.6135 9.36991 20.6135C9.27135 20.6135 9.17279 20.6119 9.07577 20.6104C8.17487 20.5873 7.30015 20.4625 6.46239 20.2469C6.46239 20.2469 6.46239 20.2469 6.46085 20.2469C3.21452 18.5375 1 15.1311 1 11.2087C1 5.57072 5.57072 1 11.2071 1C15.8102 1 19.7018 4.04766 20.9754 8.23493C20.9923 8.48287 21 8.73235 21 8.98337Z"
                        stroke="black"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M9.07568 20.6104C9.07568 20.6104 11.2378 20.2377 12.1819 16.8559C13.1259 13.474 17.0175 11.5382 19.3768 11.2087C19.3768 11.2087 20.8906 10.5095 20.9984 8.98337" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M5.34131 13.2784C5.34131 13.2784 7.60049 17.6674 12.0203 16.6264" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M7.70057 9.30677C8.41755 9.30677 8.99879 8.72553 8.99879 8.00854C8.99879 7.29156 8.41755 6.71032 7.70057 6.71032C6.98358 6.71032 6.40234 7.29156 6.40234 8.00854C6.40234 8.72553 6.98358 9.30677 7.70057 9.30677Z" fill="black" />
                      <path d="M14.3055 9.30677C15.0225 9.30677 15.6038 8.72553 15.6038 8.00854C15.6038 7.29156 15.0225 6.71032 14.3055 6.71032C13.5886 6.71032 13.0073 7.29156 13.0073 8.00854C13.0073 8.72553 13.5886 9.30677 14.3055 9.30677Z" fill="black" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'sticker';
                        handleNavigatetype(typeSlug);
                      }}>
                      Sticker
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.88843 1.84003C8.85014 9.24215 16.1963 12.2778 16.1963 12.2778L25.0001 9.35415C25.0001 9.35415 18.6076 8.34447 15.6362 1L6.88843 1.84003Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.94094 6.26746L2.85156 8.84849C2.85156 8.84849 7.73031 14.2313 16.2525 14.3993L24.7186 11.0902L22.5971 10.1497" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M6.88843 11.8693L1 14.5706L15.9442 17.4003L24.9984 14.0534L20.1147 12.762" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div
                      className="header__menu__category-link"
                      onClick={() => {
                        const typeSlug = 'tem-nhan';
                        handleNavigatetype(typeSlug);
                      }}>
                      Tem nhãn
                    </div>
                  </li>
                  <li className="header__menu__category-item">
                    <Link to={'/category'} className="header__menu__category-all">
                      XEM TẤT CẢ
                      <FaArrowRight />
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="col l-6 navbar__item">
              <nav className="header__menu">
                <ul className="header__menu-list">
                  {menus?.map((menu, menuKey) => (
                    <li key={menuKey} className="header__menu-item">
                      <Link to={menu?.path} className="header__menu-link">
                        {menu?.name}
                      </Link>
                      {menu.child && <GoTriangleDown />}
                      {menu.child && (
                        <ul className="header__menu__dropdown">
                          {menu.child.map((childItem, childKey) => (
                            <li key={`${menuKey}-${childKey}`} className="header__menu__dropdown-item">
                              <Link to={childItem.path} className="header__menu__dropdown-link">
                                {childItem.name}
                              </Link>
                              {childItem.children && (
                                <ul className="header__menu__dropdown__sub">
                                  {childItem.children.map((childrenItem, childrenKey) => (
                                    <li key={`${menuKey}-${childrenKey}`} className="header__menu__dropdown__sub-item">
                                      <Link to={childrenItem.path} className="header__menu__dropdown__sub-link">
                                        {childrenItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="col l-3 navbar__order">
              <Link to={'/order'}>
                <img src={images.Print} className="print" alt=""></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
