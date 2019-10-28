import React from 'react';

import PrimaryButton from '@/components/PrimaryButton';
import SelectButton from '@/components/SelectButton';
import Title from '@/components/Title';

export default class RegistrationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: null,
      gender: null, 
    };
  }

  onClickAge = (age) => {
    this.setState({ age });
  }

  onClickGender = (gender) => {
    this.setState({ gender });
  }

  render() {
    const hasBlank = !this.state.age || !this.state.gender;

    return (
      <div className="registration-form">
        <div className="registration-form-title">
          당신에 대해 알려주세요.
        </div>
        <div className="registration-form-element">
          <Title text="나이" />
          <div style={{ height: 16 }}></div>
          <div className="registration-form-element-selections">
            {
              [10, 20, 30, 40, 50, 60].map(age => 
                <SelectButton key={age} text={`${age}대`} selected={ age === this.state.age } onClick={() => this.onClickAge(age)} />
              )
            }
          </div>
        </div>
        <div className="registration-form-element">
          <Title text="성별" />
          <div style={{ height: 16 }}></div>
          <div className="registration-form-element-selections">
            {
              ['남자', '여자'].map(gender => 
                <SelectButton key={gender} text={gender} selected={ gender === this.state.gender } onClick={() => this.onClickGender(gender)} />
              )
            }
          </div>
        </div>
        <div style={{ height: 40 }}></div>
        <PrimaryButton text="시작하기" disabled={ hasBlank } />
      </div>
    );
  }
}
