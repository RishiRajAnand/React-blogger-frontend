import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

import styled from 'styled-components';

const StyledButton= styled(Button)`
width:100%;
`;


class Navbar extends React.Component {
  render() {
    return (
      <Appbar>
      <Container fluid={true}>
        <Row>
        <Col md="2"><Link to="/blogs"><StyledButton color="primary">Home</StyledButton></Link></Col>
        <Col md-offset="7">
        <Col md="3"><Link to="/login"><StyledButton color="primary">Login</StyledButton></Link></Col>
        <Col md="3"><Link to="/profile"><StyledButton color="primary">Profile</StyledButton></Link></Col>
        <Col md="3"><Link to="/signup"><StyledButton color="primary">Sign Up</StyledButton></Link></Col>
        <Col md="3"><StyledButton color="primary">About</StyledButton></Col>
        </Col>

        </Row>
      </Container>
      </Appbar>
    );
  }
}

export default Navbar;
