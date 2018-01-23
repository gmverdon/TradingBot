import React, {Component} from 'react';
import './styles.css';

// Libraries
import { Card, CardBody, CardTitle, CardText, Button, Input } from 'reactstrap';

class InputPanel extends Component {
  state = {
    value: 0,
    disabled: false
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      disabled: false,
    });
  }

  handleClick = () => {
    this.props.onChange(this.state.value);
    this.setState({disabled: true})
  }

  render() {
    const {onChange, name, step, title, description, placeholder} = this.props;
    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <div className="horizontalGroup">
            <Input onChange={this.handleChange} step={step} value={this.state.value} type="number" name={name} placeholder={placeholder} />
            <Button disabled={this.state.disabled} onClick={this.handleClick} className="ml-3" color="primary">Submit</Button>
          </div>
        </CardBody>
      </Card>
    )
  }
};

export default InputPanel;
