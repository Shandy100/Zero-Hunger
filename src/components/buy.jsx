import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import zerro from "../assets/zerro.png"


const buy = ()=> {
    return (
        <div className="cards">
        <h4>You have to Sign in before buying or selling products</h4>
        <Button variant="primary">Sign in</Button>{" "}
        <Button variant="primary">Sign Up</Button>
        <br /><br />
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={zerro} height="150" />
        <Card.Body>
          <Card.Title>Product Name</Card.Title>
          <Card.Text>
            Product Details here
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card><br />
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={zerro} height="150" />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Product Details here
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card><br />
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={zerro} height="150" />
    <Card.Body>
      <Card.Title>Product Name</Card.Title>
      <Card.Text>
        Product Details here
      </Card.Text>
      <Button variant="primary">Buy</Button>
    </Card.Body>
  </Card>
            
        </div>
    )
}

export default buy;