import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'


class ItemSpec extends React.Component{
   
    render () {
        console.log(this.props)
        return(
            
                <React.Fragment>
                <Col sm ={4}>
                    <Card style={{ width: '18rem','border-radius': '7px', marginLeft: '25%', marginTop: '30%'}} onClick = {() => this.props.handleShow(this.props.chosenItem)}>
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
                <Col sm = {8} style = {{height: '91vh' ,backgroundColor: 'gray'}}>
                    <Card style = {{height: '90vh', width: '130vh', backgroundColor: 'gray'}}>
                        {"Description: " + this.props.chosenItem.description}
                    </Card>
                </Col>
            </React.Fragment>
        )
    }  
}
export default ItemSpec