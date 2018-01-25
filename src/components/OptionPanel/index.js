import React, {PureComponent} from 'react';
import './styles.css';

// Libraries
import { Card, CardBody, CardTitle, CardText, Button, ButtonGroup } from 'reactstrap';

class OptionPanel extends PureComponent {

  getButtons = () => {
    const buttonList = [];
    const options = this.props.options;

    for (var i = 0; i < options.length; i++) {
      buttonList.push(this.generateButton(options[i].label, options[i].value, options[i].color, i));
    }

    return buttonList;
  }

  generateButton = (label, value, color, counter) => {
    if (value === this.props.value) {
      return <Button key={counter} color={color} onClick={() => this.handleClick(value)}>{label}</Button>
    }
    return <Button key={counter} color="secondary" onClick={() => this.handleClick(value)}>{label}</Button>
  }

  handleClick = (value) => {
    this.props.onChange(value);
  }

  render = () => {
    const {title, description} = this.props;
    return (
      <Card>
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardText>{description}</CardText>
          <ButtonGroup>
            {this.getButtons()}
          </ButtonGroup>
        </CardBody>
      </Card>
    )
  }
};

export default OptionPanel;
