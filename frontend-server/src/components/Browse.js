import React from "react";
import {BrowseCards} from './BrowseCards.js'
import {ItemSpec} from './ItemSpec.js'
import Row from "react-bootstrap/Row";
import Nav from './Home.js'

class Browse extends React.Component {
    state = {
        allItems: [],
        showingAllItems: true,
        chosenItem: {},
        current_user: {}
    }
    componentDidMount() {
        fetch('http://localhost:3000/allItems', {
            method: "GET",
            headers :{
                'Content-Type' : 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                allItems: data
            })
        })
    }
    handleShow = (item) => {
        this.setState({
            showingAllItems: !this.state.showingAllItems,
            chosenItem: item
        })
    }

    addToCart = (item) => {
        console.log(item)
        fetch(`http://localhost:3000/addToCart/${localStorage.getItem('user')}/${item.id}`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify({
                user_id: localStorage.getItem('user'),
                item_id: item.id,
                quantity: 1,
                item_name: item.item_name,
                price: item.price,
                image_url: item.image_url
            })
        })
    }
    render(){
        return(
            <div>
            <Nav/>
            <Row style= {{height: '100vh'}}>
                {this.state.showingAllItems ? this.state.allItems.map( (item, index) =><BrowseCards item = {item} handleShow = {this.handleShow} addToCart = {this.addToCart}/>) : <ItemSpec chosenItem = {this.state.chosenItem} handleShow = {this.handleShow}/>}
            </Row>
            </div>
        )
    }
}
export {Browse}
