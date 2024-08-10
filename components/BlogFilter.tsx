import React from 'react';

const categories = ['All Posts', 'Insights', 'Development', 'Design', 'SEO', 'Search'];

const BlogFilter: React.FC = () => {
  return (
    <div className="flex justify-center space-x-4 py-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-full ${
            category === 'All Posts' ? 'bg-white text-black' : 'bg-gray-800 text-white'
          } hover:bg-gray-700 focus:outline-none transition`}
        >
          {category}
          {category === 'Search' && (
            <span className="ml-2">
              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm7.71-4.29l4.58 4.59-1.42 1.42-4.59-4.58a7 7 0 111.43-1.43z" />
              </svg>
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default BlogFilter;
