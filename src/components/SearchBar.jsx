import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  setTerm = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Youtube Search</label>
            <input
              text=""
              type="text"
              placeholder="Search here"
              value={this.state.term}
              onChange={this.setTerm}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
