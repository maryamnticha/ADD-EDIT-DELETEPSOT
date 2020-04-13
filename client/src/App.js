import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import SignIn from "./componennts/signIn";
import SignUp from "./componennts/signUp";
import Home from "./componennts/Home";
import Profile from "./componennts/Profile";
import Guesthome from "./componennts/Guesthome";
import PostList from "./componennts/PostList";
import AddPost from "./componennts/addPost";
import OnePostList from "./componennts/OnePostList";
// import EditModal from "./componennts/EditModal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Guesthome />} />
          <Route exact path="/login" render={() => <SignIn />} />
          <Route exact path="/register" render={() => <SignUp />} />
          <Route exact path="/home" render={() => <Home />} />
          <Route path="/profile" component={Profile} />
          <Route
            exact
            path="/profile/:id/getAllPost"
            render={(props) => <PostList {...props} />}
          />

          <Route
            exact
            path="/profile/:id/add"
            render={(props) => <AddPost {...props} />}
          />
          <Route
            extact
            path="/profile/:id/edit"
            render={(props) => <OnePostList {...props} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
