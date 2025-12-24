import React from 'react';

const TmdbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 512 512"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm-88 320h-32V160h32zm64 0h-32V160h32zm64 0h-32V160h32zm64 0h-32V160h32z"/>
  </svg>
);

export default TmdbIcon;
