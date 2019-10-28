import React from 'react';

import '@/components/Title.scss';

export default function Title({ text }) {
  return (
    <div className="title">
      { text }
    </div>
  );
}

