import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import Toolbar from './components/Toolbar';
import {arraysProject} from './data/dataArray';
// Вынес массив с данными для отрисовки исключительно для соображения чистоты и качества кода

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.dataArray = arraysProject();
    this.state = {filterName: 'All', filtersArr: [...this.dataArray]};
  }

  arrayFilteringFunction(filterName) {
    console.log(filterName);
    this.setState({filtersArr: []}) // Чистим стейт
    filterName === 'All' ? 
      this.dataArray.map((el) => this.setState(prev => ({filtersArr: [...prev.filtersArr, el]}))) :
      this.dataArray.filter((obj) => (obj.category === filterName ))
      .map((el) => this.setState(prev => ({filtersArr: [...prev.filtersArr, el]})));
  }

  render() {
    return (
      <>
        <Toolbar 
          filters={["All", "Websites", "Flayers", "Business Cards"]} 
          selected="All" 
          onSelectFilter={(filter) => this.arrayFilteringFunction(filter)}
        />
        <ProjectList list={this.state.filtersArr} />
      </>
    );
  }
}


function App() {
  return (
    <div className="App">
      <div className="container">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
