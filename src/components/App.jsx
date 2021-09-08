import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = (term) => {
    console.log(term);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </>
    );
  }
}

export default App;
