import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const FavoritesCard = (props) => {
    console.log(props, "in fav card")
    return(
        // <div>
        //     <div style = {{height: '5rem'}}>

        //     </div>
        //     <Row>
                <Col xs={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.item.image_url} />
                        <Card.Body>
                            <Card.Title>{props.item.item_name}</Card.Title>
                            <Card.Text>
                                {props.item.description}
                                {props.item.price}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                // <Col>
                //     <Card style={{ width: '18rem' }}>
                //         <Card.Img variant="top" src={props.item.image_url} />
                //         <Card.Body>
                //             <Card.Title>{props.item.item_name}</Card.Title>
                //             <Card.Text>
                //                 {props.item.description}
                //                 {props.item.price}
                //             </Card.Text>
                //             <Button variant="primary">Go somewhere</Button>
                //         </Card.Body>
                //     </Card>
                // </Col>
                // <Col>
                //     <Card style={{ width: '18rem' }}>
                //         <Card.Img variant="top" src={props.item.image_url} />
                //         <Card.Body>
                //             <Card.Title>{props.item.item_name}</Card.Title>
                //             <Card.Text>
                //                 {props.item.description}
                //                 {props.item.price}
                //             </Card.Text>
                //             <Button variant="primary">Go somewhere</Button>
                //         </Card.Body>
                //     </Card>
                // </Col>
        //     </Row>
        // </div>
    )
}
export {FavoritesCard}