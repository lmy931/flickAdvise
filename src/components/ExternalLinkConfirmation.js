import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ExternalLinkConfirmation.css'; // 确保你有这个CSS文件来包含样式

const ExternalLinkConfirmation = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);

  const handleProceed = () => {
    window.location.href = decodedUrl; // 外部跳转
  };

  return (
    <div className="wrapper">
      {/* <div className="logo">
        <a href="https://www.flickadvise.com">
          <img src="/path/to/your/logo.png" alt="FlickAdvise" />
        </a>
      </div> */}
      <div className="content">
        <h1>即将离开 FlickAdvise</h1>
        <p className="info">您即将离开 FlickAdvise，请注意您的账号和财产安全。</p>
        <p className="link">{decodedUrl}</p>
      </div>
      <div className="actions">
        <button className="button" onClick={handleProceed}>继续访问</button>
      </div>
    </div>
  );
};

export default ExternalLinkConfirmation;
