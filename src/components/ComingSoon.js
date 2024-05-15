import React from 'react';

function ComingSoon({ title }) {
  return (
    <div className="coming-soon bg-light text-center p-5 m-5 shadow rounded">
      <h2 className="display-4">{title}</h2>
      <p className="lead">Coming soon...</p>
    </div>
  );
}

export default ComingSoon;
