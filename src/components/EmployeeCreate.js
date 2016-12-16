import React from 'react';
import { Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';

import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {

    render() {
      return (
        <Card>
          <CardSection>
              <Input
              label='Name'
              placeHolder='Jane'
              value={this.props.name}
              onChangeText={(text) => this.props.employeeUpdate({ prop: 'name', value: text })}
              />
          </CardSection>

          <CardSection>
              <Input
              label='Phone'
              placeHolder='06XXXXXXXX'
              value={this.props.phone}
              onChangeText={(text) => this.props.employeeUpdate({ prop: 'phone', value: text })}
              />
          </CardSection>

          <CardSection>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
            >
              <Picker.Item label="Monday" value="Monday" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
          </CardSection>

          <CardSection>
            <Button>Create</Button>
          </CardSection>

        </Card>
      );
    }
}

const mapStateProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps, { employeeUpdate })(EmployeeCreate);
