import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="nav-scroller py-1 mb-3 border-bottom">
      <nav className="nav nav-underline justify-content-between">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"} end>今日推荐</NavLink>
        <NavLink to="/awards" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>获奖电影</NavLink>
        <NavLink to="/adaptations" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>真实改编</NavLink>
        <NavLink to="/books" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>书单推荐</NavLink>
        <NavLink to="/short-films" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>获奖短片</NavLink>
        <NavLink to="/escape-trip" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>Escape Trip!</NavLink>
        <NavLink to="/submit" className={({ isActive }) => isActive ? "nav-item nav-link link-body-emphasis active" : "nav-item nav-link link-body-emphasis"}>欢迎投稿</NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
