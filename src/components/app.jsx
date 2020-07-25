/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GiftList from './gift_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "Zk9mW5OmXTz9e"
    };
  }

  search = (query) => {
    giphy('pVaVWB0C7zmGFl56zLh1dFmNXfTCNamY').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGif: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GiftList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
