import React from "react";
import { Card, Button } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getonepost } from "../redux/actions/postaction";
class PostCard extends React.Component {
  getonepost = (e) => {
    e.preventDefault();
    this.props.getonepost(this.props.post._id);
  };
  render() {
    const { post } = this.props;
    const { title, body } = post;
    return (
      <div>
        <Card tyle={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>

            <Button onClick={this.getonepost}>
              <Link to={`/profile/${post._id}/edit`}> Lire la suite </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   // onepost: state.postReducer.onepost,
// });
export default connect(null, { getonepost })(PostCard);
