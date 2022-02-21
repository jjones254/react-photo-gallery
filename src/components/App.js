import React, { Component } from "react";
import apiKey from "../config";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

// App components
import Search from "./Search";
import Nav from "./Nav";
import Gallery from "./Gallery";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        aquaPhotos: [],
        computerPhotos: [],
        gamingPhotos: [],
        dogPhotos:[],
        searchPhotos: [],
    };
  }

  // Get photos from API when the App loads
  componentDidMount() {
    this.getPhotos('reef', 'aquaPhotos');
    this.getPhotos('computers', 'computerPhotos');
    this.getPhotos('gaming', 'gamingPhotos');
    this.getPhotos('dogs', 'dogPhotos');
  }

  // Get photos function uses "text" for search input and "state" to specify which state to set 
  getPhotos = (text, state) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        [state]: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log("Error fetching data.", error);
    });
  }

  // Uses "text" for search input and sets the "searchPhotos" state
  performSearch = (text) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&sort=relevance&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        searchPhotos: response.data.photos.photo,
      });
    })
    .catch(error => {
      console.log("Error fetching data.", error);
    });
  }
   
  render() {
    return (
      <Router>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav />
          <Routes>
            <Route path="/" element={<Gallery data={this.state.aquaPhotos} title={'Gallery'} />} />
            <Route path="/computers" element={<Gallery data={this.state.computerPhotos} title={'Computer Photos'} />} />
            <Route path="/gaming" element={<Gallery data={this.state.gamingPhotos} title={'Gaming Photos'} />} />
            <Route path="/dogs" element={<Gallery data={this.state.dogPhotos} title={'Dog Photos'} />} />
            <Route path="/search" element={<Gallery loading={this.state.loading} data={this.state.searchPhotos} title={'Search Results'} />} />
            <Route path="*" element={<NotFound title={"Not Found"} />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
