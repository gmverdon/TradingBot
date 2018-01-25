import React, {Component} from 'react';
import './styles.css';

export default class HorizontalTabList extends Component {
  getListItems = () => this.props.list.map((item, i) => this.generateListItem(item.symbol, i));

  generateListItem = (title, counter) => (
    <li
      className={'list-inline-item' + (title === this.props.selectedItem.symbol ? ' active' : '')}
      key={counter}
      onClick={() => this.changeSelectedItem(title)}>
      {title}
    </li>
  );

  changeSelectedItem = title => this.props.changeSelected(title);

  render = () => (
    <ul className="list-inline tablist">
      {this.getListItems()}
    </ul>
  );
};
