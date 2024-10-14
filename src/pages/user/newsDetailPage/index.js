import { useNavigate } from 'react-router-dom';
import { background } from '../../../img/index';
import './style.scss';
import * as BlogService from '../../../services/BlogService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const NewsDetailPage = () => {
  const navigate = useNavigate();
  const [detailBlog, setDetailBlog] = useState([]);
  const { id } = useParams();
  const getDetailsBlog = async id => {
    const res = await BlogService.getDetailsBlog(id);
    if (res?.status === 'OK') {
      setDetailBlog(res.data);
    }
  };
  useEffect(() => {
    getDetailsBlog(id);
    const elementBlogDetail = document.querySelector('.news_detail-content');
    if (elementBlogDetail) elementBlogDetail.innerHTML = detailBlog.content;
  }, [detailBlog]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="grid banner">
        <img src={background.aboutBG} alt="" />
        <div className="banner__title">
          {detailBlog.title}
          <div className="banner__dscr">
            <span
              onClick={() => {
                navigate('/');
              }}>
              Home
            </span>
            <div className="banner__space"></div> {detailBlog.title}
          </div>
        </div>
      </div>

      <div className="grid wide news_detail-wrapper">
        <div className="row">
          <div className="col l-9 news_detail-container">
            <div className="news_detail-title">{detailBlog.title}</div>
            <div className="news_published-date">
              <span>{detailBlog.updatedAt ? new Date(detailBlog.updatedAt).toISOString().split('T')[0] : ''}</span>
              <div className="news_published-date-space"></div>by {detailBlog.author}
            </div>
            <img src={detailBlog.image} alt="" className="news_detail-image" />
            <div className="news_detail-content">{detailBlog.content}</div>
          </div>
          <div className="col l-3">
            <ul className="news_blog">
              Bài viết mới nhất
              <li className="news_blog-items">Thiết kế và in ấn Menu ở đâu đẹp và chất lượng?</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewsDetailPage;
