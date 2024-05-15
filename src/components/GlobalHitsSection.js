// src/components/GlobalHitsSection.js
import React from 'react';

function GlobalHitsSection({ posts }) {
  return (
    <div>
      <h4>全球热映</h4>
      <ul className="list-unstyled">
        {posts.map(post => (
          <li key={post.id}>
            <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-dark text-decoration-none border-top" href="#">
              <img src={post.imageSrc} width="auto" height="120px" />
              <div className="col-lg-8">
                <h6 className="mb-0">{post.title}</h6>
                <small className="text-muted">{post.date}</small><br />
                <small className="text-muted">{post.description}</small>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlobalHitsSection;
