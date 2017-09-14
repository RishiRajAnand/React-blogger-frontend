import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import styled from 'styled-components';
import Popular from './popular.jsx';
import getBlogs from '../apicalls/callapis.js';

const StyledImg = styled.img`
height:300px;
`;

class Blogs extends React.Component {
constructor(){
  super();
  this.state={
    allBLogs:""
  }
}

  componentDidMount() {
  getBlogs.requestAllBlogs().then(response => {
    console.log("data",response.response.data);
    this.setState({allBLogs: response.response.data})
  });
}

  render() {

    var blogArr = []
for (var i = 0; i < this.state.allBLogs.length; i++) {
console.log("object",this.state.allBLogs[i]);
    blogArr.push(
      <Container key={i} fluid={true}>
<h3>Lets fight the injustice</h3>
<div>
<span>Posted by:{this.state.allBLogs[i].publisherId}-</span> <span>On- {this.state.allBLogs[i].date}</span><span>Comments</span>
</div>
<StyledImg src="http://img.picturequotes.com/2/22/21367/me-sarcastic-never-quote-1.jpg">
</StyledImg>
<p>{this.state.allBLogs[i].content}</p>
  </Container>
    )
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

export default Blogs;
