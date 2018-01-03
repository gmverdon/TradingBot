import React, { Component } from 'react';
import './styles.css';

// Libraries
import { Link } from 'react-router-dom'
import {AppBar, Tabs, Tab} from 'material-ui';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    }

    // bindings
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(value) {
    console.log(value);
    this.setState({
      value: value
    })
  }


  render() {
    return (
      <AppBar title="TradeHub">
        <Tabs onChange={this.changeTab} value={this.state.value} >
          <Tab value={0} label="Home" containerElement={<Link to="/" />} />
          <Tab value={1} label="TradeHub" containerElement={<Link to="/tradehub"/>}/>
        </Tabs>
      </AppBar>
    )
  }
}

export default Header;
