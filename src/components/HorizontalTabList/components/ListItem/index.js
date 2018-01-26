import React, {Component} from 'react';
import './styles.css';

export default class ListItem extends Component {
  changeSelected = () => this.props.changeSelectedItem(this.props.title);

  render = () => {
    const { title, symbol, counter } = this.props;
    return (
      <li
        className={'list-inline-item' + (title === symbol ? ' active' : '')}
        key={counter}
        onClick={this.changeSelected}>
        {title}
      </li>
    );
  };
};
