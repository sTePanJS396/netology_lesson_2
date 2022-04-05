import React, { Component } from 'react';
import CardsView from './Cards/CardsView';
import IconSwich from './IconSwich';
import ListView from './List/ListView';

class Store extends Component {
  constructor(props) {
    super(props)
    this.product = this.props.product;
    this.state = {isModView: "view_module"}
  }

  changeModView() {
    if (this.state.isModView === 'view_module') {
      this.setState({isModView: "view_list"})
    } 

    if (this.state.isModView === 'view_list') {
      this.setState({isModView: "view_module"})
    }
  }

  render() {
    return (
      <>
        <IconSwich icon={this.state.isModView} onSwich={this.changeModView.bind(this)}/>
        {this.state.isModView === 'view_module' ? <CardsView card={this.product}/> : <ListView list={this.product}/>}
      </>
    );
  }
}
export default Store;