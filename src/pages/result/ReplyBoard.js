import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';

export default class ReplyBoard extends React.Component {

  render() {
    return (
      <div className="reply-board">
        <PrimaryButton text="댓글 보러가기" 
                       style={{border: '1px solid #ccc', backgroundColor: '#fff', color: '#777'}} />
      </div>
    );
  }
}
