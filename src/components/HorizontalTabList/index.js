import React, {Component} from 'react';
import './styles.css';
import ListItem from './components/ListItem';

export default class HorizontalTabList extends Component {
  getListItems = () =>
    this.props.list.map((item, i) =>
      <ListItem
        title={item.symbol}
        symbol={this.props.selectedItem.symbol}
        key={i}
        changeSelectedItem={this.changeSelectedItem}
      />
    );

  changeSelectedItem = title => this.props.changeSelected(title);

  render = () => (
    <ul className="list-inline tablist">
      {this.getListItems()}
    </ul>
  );
};
