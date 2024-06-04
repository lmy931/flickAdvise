import React from 'react';
import Banner from './Banner';
import MovieSection from './MovieSection';
import GlobalHitsSection from './GlobalHitsSection';  // 引入新的 GlobalHitsSection 组件
import HallOfFame from './HallOfFame';
import { featuredMovies, weekendMovies, nightMovies, inspiringMovies, loveMovies, globalHitMovies } from '../data/movieData'; 
import '../styles/DailyMovieRecommendations.css';

function DailyMovieRecommendations() {
  return (
    <React.Fragment>
      <Banner />
      <MovieSection title="今日推荐_" posts={featuredMovies} featured={true} />
      <div className="row g-5">
        <div className='col-md-8'>
          <MovieSection title="舒适周末" posts={weekendMovies} featured={false} />
          <MovieSection title="夜晚冒险" posts={nightMovies} featured={false} />
          <MovieSection title="爱情满屋" posts={loveMovies} featured={false} />
          <MovieSection title="激励人心" posts={inspiringMovies} featured={false} />
        </div>
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-4 mb-3 bg-light rounded">
              <h4>每日推荐</h4>
              <p className="mb-0">电影能将你带入另一个世界。</p>
              <p className="mb-0">-- 詹姆斯·卡梅隆（James Cameron）</p>
            </div>
            <GlobalHitsSection posts={globalHitMovies} />
            <HallOfFame />
            <div className="p-4 mb-3 bg-light rounded">
              <p className="mb-0">我们的社区还在建设中</p>
              <p className="mb-0">更多内容 comming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DailyMovieRecommendations;
