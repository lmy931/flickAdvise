import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DailyMovieRecommendations from './components/DailyMovieRecommendations';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ComingSoon from './components/ComingSoon'; // 新建的组件

function App() {
  return (
    <Router basename="/flickAdvise">
      <div className="container">
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<DailyMovieRecommendations />} />
          <Route path="/awards" element={<ComingSoon title="获奖电影" />} />
          <Route path="/adaptations" element={<ComingSoon title="真实改编" />} />
          <Route path="/books" element={<ComingSoon title="书单推荐" />} />
          <Route path="/short-films" element={<ComingSoon title="获奖短片" />} />
          <Route path="/escape-trip" element={<ComingSoon title="Escape Trip!" />} />
          <Route path="/submit" element={<ComingSoon title="欢迎投稿" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;