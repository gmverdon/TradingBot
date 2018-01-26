import React, { PureComponent } from 'react';
import './styles.css';
import { Card, CardBody, CardTitle, CardText, ButtonGroup } from 'reactstrap';
import OptionButton from './components/OptionButton';

export default class OptionPanel extends PureComponent {
  getButtons = () =>
    this.props.options.map((option, i) =>
      <OptionButton
        handleClick={this.handleClick}
        label={option.label}
        currentValue={this.props.value}
        optionValue={option.value}
        color={option.color}
        counter={i}
      />
    );

  handleClick = value => this.props.onChange(value);

  render = () => (
    <Card>
      <CardBody>
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.description}</CardText>
        <ButtonGroup>{this.getButtons()}</ButtonGroup>
      </CardBody>
    </Card>
  );
};
