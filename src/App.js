import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DailyMovieRecommendations from './components/DailyMovieRecommendations';
import ComingSoon from './components/ComingSoon';
import ExternalLinkConfirmation from './components/ExternalLinkConfirmation';
import MainLayout from './components/MainLayout'; // 引入新的布局组件
import ReactGA from 'react-ga4';

function App() {
  ReactGA.initialize('G-33P2X51ZXS');  // 使用你的 Google Analytics 4 测量 ID
  ReactGA.send('pageview');  // 发送页面查看信息

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><DailyMovieRecommendations /></MainLayout>} />
        <Route path="/awards" element={<MainLayout><ComingSoon title="获奖电影" /></MainLayout>} />
        <Route path="/adaptations" element={<MainLayout><ComingSoon title="真实改编" /></MainLayout>} />
        <Route path="/books" element={<MainLayout><ComingSoon title="书单推荐" /></MainLayout>} />
        <Route path="/short-films" element={<MainLayout><ComingSoon title="获奖短片" /></MainLayout>} />
        <Route path="/escape-trip" element={<MainLayout><ComingSoon title="Escape Trip!" /></MainLayout>} />
        <Route path="/submit" element={<MainLayout><ComingSoon title="欢迎投稿" /></MainLayout>} />
        <Route path="/confirm-external-link/:url" element={<ExternalLinkConfirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
