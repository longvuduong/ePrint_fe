import LoginPage from './pages/user/loginOrSignUpPage/index.js';
import HomePage from './pages/user/homePage';
import AboutPage from './pages/user/aboutPage';
import RecruitPage from './pages/user/recruitPage';
import RecruitDetailPage from './pages/user/recruitDetailPage';
import CategoryPage from './pages/user/categoryPage';
import ProductTypePage from './pages/user/producttypePage';
import ProductDetailPage from './pages/user/productdetailPage';
import DesignPage from './pages/user/designPage';
import LogoPage from './pages/user/designPage/logoPage';
import PolicyPage from './pages/user/policyPage';
import OrderPage from './pages/user/orderPage';
import MasterLayout from './pages/user/theme/masterLayout';
import { ROUTERS } from './utils/router';
import { Routes, Route } from 'react-router-dom';
import AdminPage from './pages/admin/adminPage/index.js';
import React, { useEffect, useState } from 'react';
import NewsPage from './pages/user/newsPage/index.js';
import NewsDetailPage from './pages/user/newsDetailPage/index.js';
import CollectionPage from './pages/user/collectionPage/index.js';
import SearchPage from './pages/user/searchPage/index.js';
import ProfilePage from './pages/user/profilePage/index.js';
const RenderUserRouter = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);
  const userRouters = [
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
    {
      path: ROUTERS.USER.LOGIN,
      component: <LoginPage />,
      hideHeader: true,
      hideFooter: true,
    },
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.ABOUT.PATH,
      component: <AboutPage />,
    },
    {
      path: ROUTERS.USER.ABOUT.RECRUIT.PATH,
      component: <RecruitPage />,
    },
    {
      path: ROUTERS.USER.ABOUT.RECRUIT.POSITION,
      component: <RecruitDetailPage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.PATH,
      component: <CategoryPage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.TYPE,
      component: <ProductTypePage />,
    },
    {
      path: ROUTERS.USER.CATEGORY.DETAIL,
      component: <ProductDetailPage />,
    },
    {
      path: ROUTERS.USER.DESIGN.PATH,
      component: <DesignPage />,
    },
    {
      path: ROUTERS.USER.DESIGN.LOGO,
      component: <LogoPage />,
    },
    {
      path: ROUTERS.USER.COLLECTION,
      component: <CollectionPage />,
    },
    {
      path: ROUTERS.USER.POLICY,
      component: <PolicyPage />,
    },
    {
      path: ROUTERS.USER.ORDER,
      component: <OrderPage />,
    },
    {
      path: ROUTERS.USER.NEWS.PATH,
      component: <NewsPage />,
    },
    {
      path: ROUTERS.USER.NEWS.DETAIL,
      component: <NewsDetailPage />,
    },
    {
      path: ROUTERS.USER.SEARCH,
      component: <SearchPage />,
    },
    {
      path: ROUTERS.ADMIN.PATH,
      component: <AdminPage />,
      hideHeader: true,
      hideFooter: true,
      isPrivate: true,
    },
  ];

  return (
    <>
      <Routes>
        {userRouters.map((item, key) => {
          const ischeckAuth = !item.isPrivate || (user && user.isAdmin);
          return ischeckAuth ? (
            <Route
              key={key}
              path={item.path}
              element={
                <MasterLayout hideHeader={item.hideHeader} hideFooter={item.hideFooter}>
                  {item.component}
                </MasterLayout>
              }
            />
          ) : null;
        })}
      </Routes>
    </>
  );
};
const RouterCustom = () => {
  return RenderUserRouter();
};
export default RouterCustom;
