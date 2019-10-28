import React from 'react';

import '@/components/RatioChart.scss';

export default function RatioChart({ side, left, right }) {

  return (
    <div className="ratio-chart">
      <div className={`ratio-chart-tooltip ${side}`}>
        <div className={`ratio-chart-tooltip-img ${side}`}></div>
      </div>
      <div className="ratio-chart-line">
        <div className="ratio-chart-line-left" style={{ width: `${left.ratio}%` }}></div>
        <div className="ratio-chart-line-divider"></div>
        <div className="ratio-chart-line-right" style={{ width: `${right.ratio}%` }}></div>
      </div>
      <div className="ratio-chart-hint">
        <div className="ratio-chart-hint-left">{left.text}</div>
        <div className="ratio-chart-hint-right">{right.text}</div>
      </div>
    </div>
  );
}

