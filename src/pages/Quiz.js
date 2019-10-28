import React from 'react';

import YesOrNo from '@/components/YesOrNo';

import '@/pages/Quiz.scss';

export default function Quiz(props) {
  return (
    <div>
      <div className="quiz-content">
        { props.text }
      </div>
      <div className="quiz-answer">
        <YesOrNo />
      </div>
    </div>
  );
}
