import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/main-navbar.jsx';
import Category from './components/category-navbar.jsx';
import Blogs from './components/blogs.jsx';
import Login from './components/login.jsx';
import Signup from './components/sign-up.jsx';
import Profile from './components/profile.jsx';
import BlogsByBlogger from './components/get-blogs-by-blogger.jsx';
import {HashRouter as Router, Route, Link, IndexRoute, browserHistory} from 'react-router-dom'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      value: null
    };
  }

  render() {
    var i = 1;
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Route path="/profile" component={Profile}/>
          <Route exact path="/blogByBlogger" component={BlogsByBlogger}></Route>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/blogs" component={Blogs}/>

          <Route exact path="/" component={Signup}/>
        </div>
      </Router>
    );
  }
}

export default App;
