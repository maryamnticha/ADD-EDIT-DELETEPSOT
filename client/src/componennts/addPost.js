import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addpost } from "../redux/actions/postaction";
class AddPost extends Component {
  state = {
    title: "",
    body: "",
    postType: "",
    date: "",
  };

  changeHandler = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };
  AddPost = (e) => {
    e.preventDefault();
    this.props.addpost(this.props.match.params.id, this.state);
  };
  render() {
    const { post } = this.props;
    return post ? (
      <Redirect to={`/profile/${post.user}/getAllPost`} />
    ) : (
      <div id="login">
        <h3 className="text-center text-white pt-5">add form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form
                  id="add-form"
                  className="form"
                  action=""
                  method="post"
                  // onSubmit={this.AddPost}
                >
                  <h3 className="text-center text-info">add post</h3>
                  <div className="form-group">
                    <label htmlFor="title" className="text-info">
                      title :
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="title"
                      onChange={this.changeHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="body" className="text-info">
                      body :
                    </label>
                    <br></br>
                    <input
                      className="form-control"
                      type="text"
                      name="body"
                      placeholder="article"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postType" className="text-info">
                      postType :
                    </label>
                    <br></br>
                    <input
                      className="form-control"
                      type="text"
                      name="postType"
                      placeholder="postType"
                      onChange={this.changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date" className="text-info">
                      date :
                    </label>
                    <br></br>
                    <input
                      className="form-control"
                      type="text"
                      name="date"
                      placeholder="date"
                      onChange={this.changeHandler}
                    />
                  </div>

                  <div className="row mt-2 justify-content-md-center">
                    <button onClick={this.AddPost}>ADD</button>
                    <button type="reset" className="btn btn-outline-danger">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapsStateToProps = (state) => ({
  post: state.postReducer.post,
});
export default connect(mapsStateToProps, { addpost })(AddPost);
