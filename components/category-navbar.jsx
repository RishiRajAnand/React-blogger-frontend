import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Button from 'muicss/lib/react/button';
import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styled from 'styled-components';

const StyledAppbar = styled(Appbar)`
background-color:rgb(27,140,116);

`;
const StyledButton= styled(Button)`
width:100%;
`;
const StyledCol= styled(Col)`
padding:0px;
`;

class Category extends React.Component {
  render() {
    return (
      <StyledAppbar>
      <Container fluid={true}>
        <Row>
        <Col md-offset="3">
        <StyledCol md="2"><StyledButton color="accent">Category</StyledButton></StyledCol>
        <StyledCol md="2"><StyledButton color="accent">Category</StyledButton></StyledCol>
        <StyledCol md="2"><StyledButton color="accent">Category</StyledButton></StyledCol>
        <StyledCol md="2"><StyledButton color="accent">Category</StyledButton></StyledCol>

        </Col>

        </Row>
      </Container>
      </StyledAppbar>
    );
  }
}

export default Category;
