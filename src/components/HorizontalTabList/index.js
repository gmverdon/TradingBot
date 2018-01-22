import React, {Component} from 'react';
import './styles.css';

class HorizontalTabList extends Component {

  getListItems() {
    let list = this.props.list;
    let listItems = [];

    for (let i = 0; i < list.length; i++) {
      const newItem = this.generateListItem(list[i].symbol, i);
      listItems.push(newItem);
    }

    return listItems;
  }

  generateListItem(title, counter) {
    if (title === this.props.selectedItem.symbol) {
      return <li className="list-inline-item active" key={counter}>{title}</li>;
    } else {
      return <li className="list-inline-item" key={counter} onClick={() => this.changeSelectedItem(title)}>{title}</li>;
    }
  }

  changeSelectedItem(title) {
    this.props.changeSelected(title);
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
