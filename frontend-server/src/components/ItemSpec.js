import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


class ItemSpec extends React.Component{
   
    render () {
        console.log(this.props)
        return(
            
                <React.Fragment>
                  
                <Col sm ={6}>
                    <Card style={{ opacity: '.8', width: '18rem','border-radius': '7px', marginLeft: '22%', marginTop: '29%'}} onClick = {() => this.props.handleShow(this.props.chosenItem)}>
                        <Card.Img variant="top" src={this.props.chosenItem.image_url} style = {{height: '250px'}}/>
                        <Card.Body >
                            <Card.Title>{this.props.chosenItem.item_name}</Card.Title>
                            <Card.Text>
                                {"Price: $" + this.props.chosenItem.price}
                            </Card.Text>

                            {this.props.browse ? <Button onClick = {() => this.props.addToFavorite(this.props.chosenItem)} variant="outline-primary" style = {{marginBottom: '5px' }}>Add to Favorites</Button> : null}
                            <Button onClick = {() => this.props.addToCart(this.props.chosenItem)} variant="outline-primary" style = {{marginBottom: '5px' }}>Add to Cart</Button>
                            <br></br>
                            <Button onClick = {() => this.props.handleShow(this.props.chosenItem)} variant="outline-primary" >Back</Button>

                        </Card.Body>
                    </Card>
                </Col>
                <Col  sm = {6} style = {{height: '91vh' ,backgroundColor: 'black'}}>
                    <Card style = {{height: '91vh', width: '72vh', backgroundColor: 'gray'}}>
                        <div style = {{color: 'white', paddingLeft: '6%'}}>
                            <div style = {{fontSize: '400%'}}>
                            {"Name: " + this.props.chosenItem.item_name}
                            </div>
                            <br></br>
                            <br></br>
                            <div style = {{fontSize: '250%'}}>
                            {"Price: " + this.props.chosenItem.price}
                            </div>
                            <br></br>
                            <div style = {{fontSize: '200%'}}>
                            {"Description: " + this.props.chosenItem.description}
                            </div>
                        </div>
                    </Card>
                </Col>
             
            </React.Fragment>
        )
    }  
}
export default ItemSpec