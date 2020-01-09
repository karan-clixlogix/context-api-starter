import React, { Fragment } from 'react'
import styled from 'styled-components';

class Car extends React.PureComponent{
  render() {
    return (
      <Fragment>
        {console.log("==car called==>") }
        <p>Name: {this.props.name}</p>
        <p>Price: ${this.props.price}</p>
        <Button primary onClick={this.props.incrementPrice}>
          &uarr;
        </Button>
        <Button onClick={this.props.decrementPrice}>
          &darr;
        </Button>
      </Fragment>
    )
  }
}
export default Car



const Button = styled.button`
    color: ${props => props.primary ? "white" : "palevioletred"};
    background-color: black;
    font-size: 30px
    padding: 20px;
`;

