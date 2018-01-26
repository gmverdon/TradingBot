import React, {Component} from 'react';
import './styles.css';
import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

export default class InputPanel extends Component {
  state = {
    value: this.props.value,
    disabled: true
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
    const { onChange, name, step, title, description, placeholder } = this.props;
    const { value, disabled } = this.state;
    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <div className='horizontalGroup'>
            <Input onChange={this.handleChange} step={step} value={value} type='number' name={name} placeholder={placeholder} />
            <Button disabled={disabled} onClick={this.handleClick} className='ml-3' color='primary'>Submit</Button>
          </div>
        </CardBody>
      </Card>
    );
  };
};
