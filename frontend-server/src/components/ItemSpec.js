import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
// import Nav from './Home.js'

class ItemSpec extends React.Component{
   
    render () {
        return(
            
                <React.Fragment>
                <Col sm ={4}>
                    <Card style={{ width: '18rem','border-radius': '7px', marginLeft: '13%', marginTop: '38%'}} onClick = {() => this.props.handleShow(this.props.chosenItem)}>
                        <Card.Img variant="top" src={this.props.chosenItem.image_url} style = {{height: '250px'}}/>
                        <Card.Body >
                            <Card.Title>{this.props.chosenItem.item_name}</Card.Title>
                            <Card.Text>
                                {"Price: $" + this.props.chosenItem.price}
                            </Card.Text>

                            <Button onClick = {() => console.log("click")} variant="primary" style = {{marginBottom: '5px' }}>Add to Cart</Button>
                            <Button onClick = {() => console.log("click")} variant="primary" style = {{marginBottom: '5px' }}>Add to Favorites</Button>
                            <br></br>
                            <Button onClick = {() => this.props.handleShow(this.props.item)} variant="primary" >Back</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm = {8} style = {{height: '100 vh', backgroundColor: 'gray'}}>
                    <Card style = {{height: '80 vh', backgroundColor: 'gray'}}>
                        {"Description: " + this.props.chosenItem.description}
                    </Card>
                </Col>
            </React.Fragment>
        )
    }  
}
export {ItemSpec}
  