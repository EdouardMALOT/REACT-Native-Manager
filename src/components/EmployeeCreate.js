import React from 'react';
import { Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';

import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

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

          <CardSection style={{ flexDirection: 'column', height: 80 }}>
              <Text style={styles.PickerStyle}>Shift :</Text>
                <Picker
                  style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
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
            <Button WhenPress={this.onButtonPress.bind(this)}>Create</Button>
          </CardSection>

        </Card>
      );
    }
}

const styles = {
  PickerStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  }
};

const mapStateProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
