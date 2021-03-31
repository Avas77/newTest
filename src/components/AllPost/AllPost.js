import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "../Posts/Post";
import EditPost from "../EditPost/EditPost";

class AllPost extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            {post.change ? (
              <EditPost post={post} id={post.id} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(AllPost);
