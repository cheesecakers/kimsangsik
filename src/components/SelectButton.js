import React from 'react';

import '@/components/SelectButton.scss';

export default function SelectButton({ selected = false, text = '', onClick }) {
  return (
    <div className={`select-button ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className={`select-button__text ${selected ? 'selected' : ''}`}>
        { text }
      </div>
    </div>
  );
}

