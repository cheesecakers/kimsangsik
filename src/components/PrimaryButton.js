import React from 'react';

import '@/components/PrimaryButton.scss';

export default function PrimaryButton({ text = '', disabled = false, onClick, style = {}}) {
  return (
    <div className={`primary-button ${disabled ? 'disabled' : ''}`} 
         style={style}
         onClick={onClick}>
      { text }
    </div>
  );
}

