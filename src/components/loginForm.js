import React from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends React.Component {


  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
      this.props.loginUser({ email: this.props.email, password: this.props.password });
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeHolder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeHolder="password"
            hidetext
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button WhenPress={this.onButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>

      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
