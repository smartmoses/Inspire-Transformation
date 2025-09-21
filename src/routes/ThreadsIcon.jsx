import React from 'react';

const ThreadsIcon = React.forwardRef((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="Threads icon"
    {...props}
  >
    <path d="M19.25 8.505A6.25 6.25 0 0 0 13 2.255c-2.93 0-5.435 2.02-6.118 4.755-1.33.358-2.401 1.31-2.81 2.58a4.25 4.25 0 0 0 .438 3.86c.69 1.082 1.92 1.83 3.24 1.94.26-.8.63-1.54.92-2.23-.81-.23-1.53-.8-1.9-1.58a2.75 2.75 0 0 1-.28-2.5c.27-.8 1-1.4 1.85-1.56a6.25 6.25 0 0 1 12.5 0 2.75 2.75 0 0 1 1.85 1.56c.27.8.1 1.73-.28 2.5-.37.78-1.09 1.35-1.9 1.58.29.69.66 1.43.92 2.23 1.32-.11 2.55-.858 3.24-1.94a4.25 4.25 0 0 0 .438-3.86c-.41-1.27-1.48-2.222-2.81-2.58Z" />
  </svg>
));

ThreadsIcon.displayName = 'ThreadsIcon';

export { ThreadsIcon };