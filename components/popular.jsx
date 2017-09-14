import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styled from 'styled-components';

const StyledImg = styled.img`
width:200px;
`;

class Popular extends React.Component {

    constructor() {
    super();
    this.state={
      statecheck:"just a check"
    }
  }
  render() {
    return (

  <Col md="4">
<h3>Popular posts</h3>
<StyledImg src="https://www.yesbank.in/squareimages/whats%20new%20banner%20image.jpg"></StyledImg>
<p>Corporate life is what you choose ?{this.props.name} {this.state.statecheck}</p>
  </Col>


    );
  }
}

export default Popular;
