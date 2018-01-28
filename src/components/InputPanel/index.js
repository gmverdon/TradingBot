import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';
import './styles.css';

export default class InputPanel extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    step: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
  };

  state = {
    value: this.props.value,
    disabled: true,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      disabled: false,
    });
  };

  handleClick = () => {
    this.props.onChange(this.state.value);
    this.setState({ disabled: true });
  };

  render = () => {
    const { name, step, title, description, placeholder } = this.props;
    const { value, disabled } = this.state;
    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <div className="horizontalGroup">
            <Input onChange={this.handleChange} step={step} value={value} type="number" name={name} placeholder={placeholder} />
            <Button disabled={disabled} onClick={this.handleClick} className="ml-3" color="primary">Submit</Button>
          </div>
        </CardBody>
      </Card>
    );
  };
}
