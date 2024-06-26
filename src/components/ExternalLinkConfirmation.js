import React from 'react';
import { useParams } from 'react-router-dom';

const ExternalLinkConfirmation = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);

  const handleProceed = () => {
    window.location.href = decodedUrl; // 外部跳转
  };

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">即将离开FlickAdvise</h1>
        <p className="lead">您即将离开FlickAdvise，请注意您的账号和财产安全。</p>
        <hr className="my-4" />
        <p className="lead">
          <button className="btn btn-primary btn-lg" onClick={handleProceed} role="button">继续</button>
        </p>
      </div>
    </div>
  );
};

export default ExternalLinkConfirmation;
