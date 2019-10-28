import React from 'react';

import '@/components/RatioChart.scss';

export default function Divider({ height = 1, color = '#cccccc' }) {

  return (
    <div style={{height, backgroundColor: color, width: '100%'}}>
    </div>
  );
}

