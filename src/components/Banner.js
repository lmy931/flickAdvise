import React from 'react';

function Banner() {
  return (
    <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
      <div className="col-lg-7 px-0">
        <h1 style={{ fontWeight: 'bold' }} className="h1 fs-3">在银幕的光影中</h1>
        <h1 style={{ fontWeight: 'bold' }} className="h1 fs-3">感受另一个世界的故事</h1>
        <p className="lead fs-6 my-3">在《Flick Advise》, 我们为你精选那些触动心灵的影片和书籍。无论是屡获殊荣的艺术电影还是温馨的日常小品，这里都是你发现生活灵感的开始。一起探索，让每个瞬间都成为美好故事的一部分。</p>
      </div>
    </div>
  );
}

export default Banner;
