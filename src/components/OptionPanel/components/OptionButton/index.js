import React, { PureComponent } from 'react';
import './styles.css';
import { Button } from 'reactstrap';

export default class OptionButton extends PureComponent {
  handleClick = () => this.props.handleClick(this.props.optionValue);

  render = () => {
    const { currentValue, optionValue, color, label } = this.props;
    return (
      <Button
        color={currentValue === optionValue ? color : 'secondary'}
        onClick={this.handleClick}
      >
        {label}
      </Button>
    );
  }
};
