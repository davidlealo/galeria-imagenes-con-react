import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

function Cards(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;