import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/actions/action";
import { getallpost } from "../redux/actions/postaction";
import { Navbar, Form, Nav, Button } from "react-bootstrap";
import PostList from "./PostList";
import PostCard from "./PostCard";

class Home extends Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout(this.state);
  };
  getallpost = (e) => {
    e.preventDefault();
    this.props.getallpost(this.state);
  };

  render() {
    const { isLoading, profile, posts } = this.props;
    return isLoading ? (
      <div className="spinner-border justify-content-md-center" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : !profile ? (
      <Redirect to="/" />
    ) : (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">This is the USER HOME</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">ARTICLE</Nav.Link>
            <Nav.Link href="#pricing">IDEAS</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="Login" type="submit" name="submit">
              <Link className="Login" to={`/profile/${profile._id}`}>
                See the Profile
              </Link>
            </Button>

            <Button className="Login" variant="danger" onClick={this.logout}>
              <Link className="Login" to="/">
                Logout
              </Link>
            </Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  profile: state.authReducer.profile,
});
export default connect(mapStateToProps, { getallpost, logout })(Home);
