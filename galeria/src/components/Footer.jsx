import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';


const Footer = (props) =>{
    return <h4>
        <Badge bg="secondary">{props.text}</Badge>
    </h4>
}


export default Footer;