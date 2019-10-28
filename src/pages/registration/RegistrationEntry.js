import React from 'react';
import PrimaryButton from '@/components/PrimaryButton';

export default function RegistrationEntry({ onStart }) {
  return (
    <div className="registration-entry">
      <div className="registration-entry--text">
        <div>모두가 아는 것을</div>
        <div>당신도 알고있을까요?</div>
        <div>당신의 상식을 테스트해보세요</div>
      </div>
      <div style={{ height: 40 }}></div>
      <PrimaryButton text="시작하기" onClick={onStart} />
    </div>
  );
}

