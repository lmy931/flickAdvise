import React from 'react';
import MovieCard from './MovieCard';

function Section({ title, posts, featured }) {
  return (
    <div>
      <h3 className="pb-4 mb-4 border-bottom">
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
          />
        ))}
      </div>
    </div>
  );
}

export default Section;
