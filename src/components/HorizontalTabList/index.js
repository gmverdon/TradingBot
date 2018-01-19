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
    title: 'Request Network',
  },
  {
    title: 'Substratum',
  },
  {
    title: 'Ethereum Classic',
  },
  {
    title: 'IOTA',
  },
  {
    title: 'Bitconnect',
  },
  {
    title: 'Basic Attention Token',
  },
  {
    title: 'Stellar',
  },
  {
    title: 'NEO',
  },
  {
    title: 'Litecoin',
  },
  {
    title: 'Cardano',
  },
  {
    title: 'TRON',
  },
  {
    title: 'Monero',
  },
  {
    title: 'ICON',
  },
  {
    title: 'Qtum',
  },
  {
    title: 'Lisk',
  },
  {
    title: 'Binance Coin',
  },
  {
    title: 'VeChain',
  }
];

class HorizontalTabList extends Component {
  getListItems() {
    let listItems = [];

    for (var i = 0; i < tilesData.length; i++) {
      let newItem = this.generateListItem(tilesData[i], i)
      listItems.push(newItem);
    }

    return listItems;
  }

  generateListItem(tile, counter) {
    if (tile.title == this.props.selectedCrypto) {
      return <li className="list-inline-item active" key={counter}>{tile.title}</li>;
    } else {
      return <li className="list-inline-item" key={counter}>{tile.title}</li>;
    }
  }

  render() {
    return (
        <ul className="list-inline tablist">
            {this.getListItems()}
        </ul>
    )
  }

}

export default HorizontalTabList;
