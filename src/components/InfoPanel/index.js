import React, { Component } from 'react';
import './styles.css';

// Material UI
import Card, { CardActions, CardHeader, CardContent, CardMedia, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class InfoPanel extends Component {

  render() {
    return (
      <Card>
        <CardHeader
          title="Without Avatar"
          subtitle="Subtitle"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
      </Card>
    )
  }
}

export default InfoPanel;
