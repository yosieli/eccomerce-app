import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

export default  class Cart  extends React.Component {

    state={
        showDetails:false
    }

    showDetails = () => {
        console.log('clickedkhkjhjk')
        this.setState({
            showDetails: true
        })
       
    }


    render(){
      return(
        <div>
            <Card style={{ width: '18rem','border-radius': '7px', margin: '10px'}}>
                <Card.Img variant="top" src={this.props.item.image_url} style = {{height: '250px'}}/>
                <Card.Body >
                    <Card.Title>{this.props.item.item_name}</Card.Title>
                    <Card.Text>
                        {"Price: $" + this.props.item.price}
                    </Card.Text>
                    <Button onClick = {()=>this.props.removeItem(this.props.item)} variant="outline-danger" style = {{marginBottom: '5px' }}>Remove </Button>
                    <Button onClick = {()=>this.props.byeItems(this.props.item)} variant="outline-primary" style = {{marginBottom: '5px' }}>Bye Item</Button>
                </Card.Body>
            </Card>

        </div>
      )
    }

}