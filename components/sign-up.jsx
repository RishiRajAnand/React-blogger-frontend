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

import styled from 'styled-components';

const StyledContainer = styled(Container)`
margin:5%;
`;

class Signup extends React.Component {

constructor(props) {
    super(props);
    this.state = {username: '',password:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
 const name = event.target.name;
 this.setState({
      [name]: event.target.value
    });
 }

 handleSubmit(event) {

   var self = this;
   getBlogs.signup(this.state.username,this.state.password).then(response => {
     console.log("data",response);
     this.props.history.push("/login");
     //this.setState({allBLogs: response.response.data})
   });
   event.preventDefault();
 }

  render() {
    return (

    <StyledContainer fluid={true}>
    <Row>
       <Col md="4" md-offset="4">
       <Form onSubmit={this.handleSubmit}>
             <legend>Sign Up</legend>
             <Input type="text"  hint="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
             <Input type="text"  hint="Password" name="password" value={this.state.password} onChange={this.handleChange} />
             <Button  type="submit" variant="raised">Sign Up</Button>
       </Form>
       </Col>
    </Row>

    </StyledContainer>

    );
  }
}
export default withRouter(Signup);
//export default Signup;
