import React from 'react';

import RegistrationEntry from '@/pages/registration/RegistrationEntry';
import RegistrationForm from '@/pages/registration/RegistrationForm';

import '@/pages/registration/Registration.scss';

export default class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  onStartForm = () => {
    this.setState({ showForm: true });
  }

  render() {
    return (
      <div>
        {
          this.state.showForm ? 
          <RegistrationForm />
          :
          <RegistrationEntry onStart={this.onStartForm} />
        }
      </div>
    );
  }
}
