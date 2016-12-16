import React from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends React.Component {

    render() {
      return (
        <Card>
          <CardSection>
            <Input label='Name' placeHolder='Jane' />
          </CardSection>

          <CardSection>
            <Input label='Phone' placeHolder='06XXXXXXXX' />
          </CardSection>

          <CardSection>
            <Button>Create</Button>
          </CardSection>

        </Card>
      );
    }
}

export default EmployeeCreate;
