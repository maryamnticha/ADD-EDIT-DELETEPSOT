import React, { Component } from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import PostCard from "./PostCard";

import { connect } from "react-redux";
import { getallpost } from "../redux/actions/postaction";

class PostList extends Component {
  componentDidMount = () => {
    this.props.getallpost(this.props.match.params.id);
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post, key) => (
          <PostCard key={key} post={post} />
        ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

export default connect(MapStateToProps, { getallpost })(PostList);
