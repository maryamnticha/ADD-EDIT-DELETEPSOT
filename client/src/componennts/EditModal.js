import React from "react";
import { Modal } from "react-bootstrap";
import { editpost } from "../redux/actions/postaction";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      posType: "",
      date: "",
    };
  }
  componentDidMount() {
    if (this.props.post)
      this.setState({
        title: this.props.post.title,
        body: this.props.post.body,
        posType: this.props.post.posType,
        date: this.props.post.date,
      });
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  EditPOST = (e) => {
    this.props.editpost(this.props.post._id, this.state);
  };
  refreshPage = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          onSubmit={this.props.toggleModal}
          onHide={this.props.toggleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>EDIT Your Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.EditPOST}>
              <label>Title:</label>
              <input
                onChange={this.handleChange}
                defaultValue={this.state.title}
                name="title"
              />
              <label>body:</label>
              <input
                onChange={this.handleChange}
                defaultValue={this.state.body}
                name="body"
              />
              <label>postType:</label>
              <input
                onChange={this.handleChange}
                defaultValue={this.state.posType}
                name="postType"
              />
              <label>date:</label>
              <input
                onChange={this.handleChange}
                defaultValue={this.state.image}
                name="date"
              />

              <button
                type="submit"
                onClick={(() => this.EditPOST(), this.toggleModal)}
              >
                submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
const mapsStateToProps = (state) => ({
  editedpost: state.postReducer.editedpost,
  onepost: state.postReducer.onepost,
});
export default connect(mapsStateToProps, { editpost })(EditModal);
