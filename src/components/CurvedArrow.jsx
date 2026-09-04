import React from 'react';

export default function CurvedArrow({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 15 C 45 5, 80 15, 95 48"
        stroke="#E50914"
        strokeWidth="2.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
      />
      <polygon
        points="95,48 105,42 97,35"
        fill="#E50914"
      />
    </svg>
  );
}
