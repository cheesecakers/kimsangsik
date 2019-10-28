import React from 'react';

import '@/components/YesOrNo.scss';

export default function YesOrNo() {
  return (
    <div className="yesorno">
      <div className="yesorno-answer">
        <div className="yesorno-answer--text">그렇다</div>
      </div>
      <div style={{height: 16}}></div>
      <div className="yesorno-answer">
        <div className="yesorno-answer--text">아니다</div>
      </div>
    </div>
  );
}
