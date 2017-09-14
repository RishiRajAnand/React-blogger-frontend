import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import BlogsByBlogger from './get-blogs-by-blogger.jsx';
import PostBlog from './post-a-blog.jsx';
import {HashRouter as Router, Route, Link, IndexRoute, browserHistory} from 'react-router-dom';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Appbar from 'muicss/lib/react/appbar';
import Col from 'muicss/lib/react/col';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import getBlogs from '../apicalls/callapis.js';

const StyledButton = styled(Button)`
width:100%;
`;
const StyledAppbar = styled(Appbar)`
background-color:snow;
`;
class Profile extends React.Component {

  constructor() {
    super();
    this.state = {
      value: null,
      loggedIn:false
    };
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    const cookies = new Cookies();
    var publisherId = cookies.get('userId');
    console.log("publisherId", publisherId);
    if(publisherId == undefined){
      this.state.loggedIn = true;
      this.props.history.push("/login");

    }
  }

  logout() {
    const cookies = new Cookies();
    getBlogs.logout().then((response) => {
      console.log(response);
      cookies.remove("accessToken");
      cookies.remove("userId");
      this.props.history.push("/blogs");
    });
    // getBlogs.login(this.state.username,this.state.password).then(response => {
    // console.log(response);
    // cookies.set("accessToken", response.response.data.id);
    // cookies.set("userId", response.response.data.userId);
    // console.log("my cookiee",cookies.get('accessToken'));
    //   console.log("logged in",response);
    //   this.props.history.push("/profile");
    // });
    event.preventDefault();
  }

  render() {
    console.log(this.props.location.pathname);
    var i = 1;
    return (
      <div>
        <StyledAppbar>
          <Container fluid={true}>
            <Row>
              <Col md="2">
                <Link to="/profile/blogByBlogger">
                  <StyledButton color="primary">My blogs
                  </StyledButton>
                </Link>
              </Col>
              <Col md-offset="7">
                <Col md="3">
                  <Link to="/profile/postblog">
                    <StyledButton color="primary">Post a blog</StyledButton>
                  </Link>
                </Col>
                <Col md="3">
                  <StyledButton onClick={this.logout} color="primary">Logout</StyledButton>
                </Col>
              </Col>
            </Row>
          </Container>
        </StyledAppbar>
        <Route path="/profile/blogByBlogger" component={BlogsByBlogger}/>
        <Route path="/profile/postblog" component={PostBlog}/>
      </div>

    );
  }
}

export default withRouter(Profile);
