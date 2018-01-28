import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default class ListItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    changeSelected: PropTypes.func.isRequired,
  };

  changeSelected = () => this.props.changeSelected(this.props.title);

  render = () => {
    const { title, selected } = this.props;
    return (
      <li
        className="list-inline-item"
      >
        <button className={`listItemButton ${selected ? 'active' : ''}`} onClick={this.changeSelected}>
          {title}
        </button>
      </li>
    );
  };
}
