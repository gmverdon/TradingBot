import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardText, ButtonGroup } from 'reactstrap';
import OptionButton from './components/OptionButton';
import './styles.css';


export default class OptionPanel extends PureComponent {
  static defaultProps = {
    value: '',
  };

  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]).isRequired,
    })).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    onChange: PropTypes.func.isRequired,
  };

  getButtons = options =>
    options.map(option => (
      <OptionButton
        handleClick={this.handleClick}
        label={option.label}
        currentValue={this.props.value}
        optionValue={option.value}
        color={option.color}
        key={`optionButton_${option.label}`}
      />
    ));

  handleClick = value => this.props.onChange(value);

  render = () => (
    <Card>
      <CardBody>
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.description}</CardText>
        <ButtonGroup>{this.getButtons(this.props.options)}</ButtonGroup>
      </CardBody>
    </Card>
  );
}
