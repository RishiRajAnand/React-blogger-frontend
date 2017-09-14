import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from 'muicss/lib/react/tabs';
import Tab from 'muicss/lib/react/tab';
import styled from 'styled-components';

const styledDiv = styled.div`
width:100px;
height:200px;
background-color:black;
`;
const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;



class Sidenav extends React.Component {
  onChange(i, value, tab, ev) {
  console.log(arguments);
}

onActive(tab) {
  console.log(arguments);
}
   render() {
     return (
       <Wrapper>
       <Tabs onChange={this.onChange} defaultSelectedIndex={1}>
            <Tab value="pane-1" label="Tab 1" onActive={this.onActive}>Pane-1</Tab>
            <Tab value="pane-2" label="Tab 2">Pane-2</Tab>
          </Tabs>
            // <styledDiv></styledDiv>
            <Title>
  Hello World, this is my first styled component!
</Title>
          </Wrapper>

       );
   }
}

export default Sidenav;
