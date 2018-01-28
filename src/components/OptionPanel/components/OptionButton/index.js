import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import './styles.css';

export default class OptionButton extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    currentValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    optionValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    color: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  };

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
}
