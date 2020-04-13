import React from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import EditModal from "./EditModal";

import { getonepost, deletepost } from "../redux/actions/postaction";

class OnePostCard extends React.Component {
  state = { show: false, isEdit: false };
  toggleModal = () => this.setState({ show: !this.state.show });
  componentDidMount() {
    this.props.getonepost(this.props.post._id);
  }
  deletepost = (e) => {
    e.preventDefault();
    this.props.deletepost(this.props.post._id);
  };
  render() {
    const { post } = this.props;
    const { title, body } = post;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>

            <Button
              // editpost={this.editpost}
              onClick={() => {
                this.toggleModal();
              }}
            >
              EdiT
            </Button>
            {this.state.show && (
              <EditModal
                show={this.state.show}
                toggleModal={this.toggleModal}
                post={this.props.post}
              />
            )}

            <Button onClick={this.deletepost} variant="primary">
              DELETE
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  profile: state.authReducer.profile,
});
export default connect(null, { getonepost, deletepost })(OnePostCard);
