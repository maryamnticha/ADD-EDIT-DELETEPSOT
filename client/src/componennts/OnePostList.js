import React, { Component } from "react";
import PostCard from "./PostCard";

import { connect } from "react-redux";
import { getonepost } from "../redux/actions/postaction";
import OnePostCard from "./OnePostCard";

class OnePostList extends Component {
  componentDidMount = () => {
    this.props.getonepost(this.props.match.params.id);
  };

  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post, key) => (
          <OnePostCard key={key} post={post} />
        ))}
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  onepost: state.postReducer.post,
  posts: state.postReducer.posts,
});

export default connect(MapStateToProps, { getonepost })(OnePostList);
