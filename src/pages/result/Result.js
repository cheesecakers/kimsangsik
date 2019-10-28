import React from 'react';

import Divider from '@/components/Divider';
import ReplyBoard from '@/pages/result/ReplyBoard';
import QuizResult from '@/pages/result/QuizResult';

import '@/pages/result/Result.scss';

export default class Result extends React.Component {

  render() {
    return (
      <div className="result">
        <div className="result-comment">
          <div><span role="img" aria-label="note">📝</span></div>
          <div>결과를 확인해보세요.</div>
        </div>
        <Divider height={1} color="#dddddd" />
        <QuizResult quiz="영국은 섬이다."/>
        <Divider height={1} color="#cccccc" />
        <Divider height={4} color="#eeeeee" />
        <QuizResult quiz="아바는 개발자다."/>
        <Divider height={1} color="#cccccc" />
        <Divider height={4} color="#eeeeee" />
        <QuizResult quiz="중국은 한자를 사용한다." />
        <Divider height={1} color="#cccccc" />
        <ReplyBoard />
      </div>
    );
  }
}
