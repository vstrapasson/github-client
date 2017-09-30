import React, { Component } from 'react';
import SearchBar from "./containers/search_bar";
import Profile from "./containers/profile";

class App extends Component {
  render() {
    return (
      <div>
          <SearchBar/>
          <Profile/>
      </div>
    );
  }
}

export default App;
