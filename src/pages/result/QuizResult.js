import React from 'react';
import Title from '@/components/Title';
import RatioChart from '@/components/RatioChart';

export default class QuizResult extends React.Component {

  render() {
    return (
      <div className="result-quiz">
        <Title text={`Q. ${this.props.quiz}`} />
        <div style={{height: 24}}></div>
        <RatioChart side="left"
                    left={{ ratio: 50, text: '30대 남성 23%' }} 
                    right={{ ratio: 50, text: '60대 여자 23%'}} />
      </div>
    );
  }
}
