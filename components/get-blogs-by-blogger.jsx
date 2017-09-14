import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styled from 'styled-components';
import Popular from './popular.jsx';
import Button from 'muicss/lib/react/button';
import {HashRouter as Router, Route, Link, IndexRoute, browserHistory} from 'react-router-dom';
import getBlogs from '../apicalls/callapis.js';
import Cookies from 'universal-cookie';
const StyledImg = styled.img `
width:400px;
`;

class BlogsByBlogger extends React.Component {
  constructor() {
    super();
    this.state = {
      allBLogs: ""
    }
    this.deleteBlog = this.deleteBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
  }

  deleteBlog(event) {
    const cookies = new Cookies();
    getBlogs.deleteBlog(this.state.username, this.state.password).then(response => {
      console.log(response);
      cookies.set("accessToken", response.response.data.id);
      cookies.set("userId", response.response.data.userId);
      console.log("my cookiee", cookies.get('accessToken'));
      console.log("logged in", response);
      this.props.history.push("/profile");
    });
    event.preventDefault();
  }
  editBlog(event) {
    const cookies = new Cookies();
    getBlogs.updateBlog(this.state.username, this.state.password).then(response => {
      console.log(response);
      cookies.set("accessToken", response.response.data.id);
      cookies.set("userId", response.response.data.userId);
      console.log("my cookiee", cookies.get('accessToken'));
      console.log("logged in", response);
      this.props.history.push("/profile");
    });
    event.preventDefault();
  }

  componentDidMount() {
    const cookies = new Cookies();
    var publisherId = cookies.get('userId');
    console.log("publisherId", publisherId);
    getBlogs.readblogsbyblogger(publisherId.toString()).then(response => {
      console.log("data", response.response.data);
      this.setState({allBLogs: response.response.data})
    });
  }

  // componentDidMount() {
  // getBlogs.requestAllBlogs().then(response => {
  //   console.log("data",response.response.data);
  //   this.setState({allBLogs: response.response.data})
  // });
  // }
  render() {

    var blogArr = [];

    //in case there are no blogs
    if (this.state.allBLogs.length == 0) {
      console.log("sorry no blogs for u");
      blogArr.push(
        <Container key="no-blogs" fluid={true}>
          <h3>It seems you dont have a blog :(</h3>
          <h4>Add a blog here</h4>
          <Link to="/profile/postblog">
            <Button color="primary">Post your first blog</Button>
          </Link>
        </Container>
      )
    } else {
      for (var i = 0; i < this.state.allBLogs.length; i++) {
        console.log("object", this.state.allBLogs[i]);
        blogArr.push(
          <Container key={i} fluid={true}>
            <h3>Blog Number: {i + 1}
              Topic should come here</h3>
            <div>
              <span>Posted by:{this.state.allBLogs[i].publisherId}-</span>
              <span>On- {this.state.allBLogs[i].date}</span>
              <span>Comments</span>
            </div>
            <StyledImg src=""></StyledImg>
            <p>{this.state.allBLogs[i].content}</p>
            <Button variant="flat" color="primary">Delete</Button>
            <Button variant="flat" color="primary">Edit</Button>
          </Container>
        )
      }
    }

    return (
      <Row>
        <Col md="6" md-offset="2">
          {blogArr}
        </Col>
        <Popular name="First"></Popular>
      </Row>
    );
  }
}

export default BlogsByBlogger;
