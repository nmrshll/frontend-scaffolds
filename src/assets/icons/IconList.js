import React from 'react';

const SvgComponent = ({ fill, ...props }) => (
  <svg viewBox="0 0 100 100" width="1em" height="1em" {...props}>
    <g fillRule="nonzero" fill={fill}>
      <path d="M30.273 29.255a3 3 0 0 0 3 3h47.333a3 3 0 1 0 0-6H33.273a3 3 0 0 0-3 3zM80.606 45.327H33.273a3 3 0 1 0 0 6h47.333a3 3 0 1 0 0-6zM80.606 64.399H33.273a3 3 0 1 0 0 6h47.333a3 3 0 1 0 0-6z" />
      <circle cx={20.607} cy={28.777} r={3.618} />
      <circle cx={20.607} cy={48.328} r={3.618} />
      <circle cx={20.607} cy={68.547} r={3.618} />
    </g>
  </svg>
);

export default SvgComponent;
