import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <Link to="/" className="nav-item nav-link link-body-emphasis active">今日推荐</Link>
        <Link to="/awards" className="nav-item nav-link link-body-emphasis">获奖电影</Link>
        <Link to="/adaptations" className="nav-item nav-link link-body-emphasis">真实改编</Link>
        <Link to="/books" className="nav-item nav-link link-body-emphasis">书单推荐</Link>
        <Link to="/short-films" className="nav-item nav-link link-body-emphasis">获奖短片</Link>
        <Link to="/escape-trip" className="nav-item nav-link link-body-emphasis">Escape Trip!</Link>
        <Link to="/submit" className="nav-item nav-link link-body-emphasis">欢迎投稿</Link>
      </nav>
    </div>
  );
}


export default Navigation;
