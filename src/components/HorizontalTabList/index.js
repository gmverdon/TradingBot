import React, {Component} from 'react';
import './styles.css';

const tilesData = [
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
  },
  {
    title: 'Bitcoin',
  },
  {
    title: 'Ripple',
  },
  {
    title: 'Ethereum',
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
        <ul className="list-inline tablist">
            {tilesData.map((tile, i) => (
              <li className="list-inline-item" key={i}>
                {tile.title}
              </li>
            ))}
        </ul>
    )
  }

}

export default HorizontalTabList;
