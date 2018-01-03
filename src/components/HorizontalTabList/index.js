import React, {Component} from 'react';
import './styles.css';

// Material UI
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';

const tilesData = [
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Etheureum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
];

class HorizontalTabList extends Component {
  render() {
    return (
      <Paper className="list" zDepth={1}>
        <List className="tabContainer">
          {tilesData.map((tile, i) => (
            <div className="tabItem">
              <ListItem key={i} primaryText={tile.title} />
            </div>
          ))}
        </List>
      </Paper>
    )
  }

}

export default HorizontalTabList;
