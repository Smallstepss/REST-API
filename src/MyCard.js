import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MyCard = ({handleClick,post}) => {
  return (
    <Card style={{ width: '18rem',margin:'10px',background:'grey' }}>
    
    <Card.Body>
      <Card.Title>{post.title}</Card.Title>
      <Card.Text>
        {post.body}
      </Card.Text>
<Button variant="primary" onClick={handleClick}>Delete</Button>
    </Card.Body>
  </Card>
  )
}

export default MyCard
