import React from 'react';
import MovieCard from './MovieCard';

function Section({ title, posts, featured }) {
  return (
    <div>
      <h3 className="mb-3 mt-3">
        {title}
      </h3>
      <div className="row mb-2">
        {posts.map(post => (
          <MovieCard
            key={post.id}
            title={post.title}
            cast={post.cast}
            type={post.type}
            description={post.description}
            imageSrc={post.imageSrc}
            featured={featured}
            externalUrl="https://example.com"
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
