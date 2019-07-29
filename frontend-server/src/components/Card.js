import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

class Cards extends React.Component{
    state = {
        front: true
    }
    render () {
        return(
            <Col xs={4}>
                <Card style={{ width: '18rem','border-radius': '7px'}}>
                    {this.state.front ? <Card.Img variant="top" src={this.props.item.image_url} style = {{height: '250px'}} /> : null}
                    <Card.Body >
                        <Card.Title>{this.props.item.item_name}</Card.Title>
                        <Card.Text>
                            {this.state.front ? "Price: $" + this.props.item.price : this.props.item.description}
                        </Card.Text>
                            {this.state.front ? <Button onClick = {() => this.setState({front: !this.state.front})} variant="primary" style = {{marginBottom: '10px' }}>View Description</Button> : <Button onClick = {() => this.setState({front: !this.state.front})} variant="primary" style = {{marginRight: '5px'}}>Back</Button>} 
                        <Button onClick = {() => console.log("click")} variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }  
}
export {Cards}