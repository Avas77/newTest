import React, { Component } from "react";
import { connect } from "react-redux";

class EditPost extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const newData = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({
      type: "UPDATE",
      data: newData,
      id: this.props.post.id,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={(input) => (this.getTitle = input)}
            placeholder="Enter Post Title"
            defaultValue={this.props.post.title}
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={(input) => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
            defaultValue={this.props.post.message}
          />
          <br />
          <br />
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditPost);
