import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';


class EmployeeEdit extends React.Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
     const { name, phone, shift } = this.props;
     this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onButtonTextPress() {
     const { phone, shift } = this.props;
     Communications.text(phone, `Your incomming shift is on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
      return (
        <Card>
          <EmployeeForm />
          <CardSection>
            <Button WhenPress={this.onButtonPress.bind(this)} >Save Changes</Button>
          </CardSection>

          <CardSection>
            <Button WhenPress={this.onButtonTextPress.bind(this)} >Text Schedules</Button>
          </CardSection>

          <CardSection>
            <Button
              WhenPress={() => this.setState({ showModal: !this.state.showModal })}
            >Fire employee</Button>
          </CardSection>


          <Confirm
            visible={this.state.showModal}
            onAccept={this.onAccept.bind(this)}
            onDecline={this.onDecline.bind(this)}
          >
            Are you sure, you want to delete this?
          </Confirm>
        </Card>
      );
  }
}

const mapStateProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
