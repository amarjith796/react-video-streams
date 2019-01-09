import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './components/navbar.component'
import GuttersGrid from './components/layout.component'
import { getVideos } from "./actions/videos-actions"


class App extends Component {
  componentDidMount() {
    this.props.getVideos();
  }
  render() {
    const { data, loading } = this.props.videosReducer;
    if (loading) {
      return "Loading..."
    }
    return (
      <div className="App">
        <NavBar />
        <GuttersGrid data={data} />
      </div>
    );
  }
}



const mapStateToProps = (store) => {
  return {
    videosReducer: store.videosReducer
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getVideos: getVideos,
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
