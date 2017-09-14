import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from "react-router-dom";
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import getBlogs from '../apicalls/callapis.js';
import CKEditor from "react-ckeditor-component";

import styled from 'styled-components';

const StyledContainer = styled(Container)`
margin:5%;
`;

class PostBlog extends React.Component {

  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
    this.state = {
      content: 'content',
      heading: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateContent(newContent) {
    this.setState({content: newContent});
    console.log(this.state);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {

    var self = this;
    console.log("i a postig it",this.state.content);
    getBlogs.postBlog(this.state.content).then(response => {
      console.log("blog posted", response);
      this.props.history.push("/profile/blogByBlogger");
    }).catch(error =>{
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (

      <StyledContainer fluid={true}>
        <Row>
          <Col md="4" md-offset="4">
            <Form onSubmit={this.handleSubmit}>
              <legend>Your blog here </legend>
              <Input type="text" hint="Heading" name="heading" value={this.state.heading} onChange={this.handleChange}/>
              <CKEditor activeClass="p10" content={this.state.content} onChange={this.updateContent}/>
              <Button type="submit" variant="raised">Post it</Button>
            </Form>
          </Col>
        </Row>

      </StyledContainer>

    );
  }
}
export default withRouter(PostBlog);
//export default Signup;
