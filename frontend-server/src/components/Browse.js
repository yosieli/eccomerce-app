import React from "react";
import {BrowseCards} from './BrowseCards.js'
import {ItemSpec} from './ItemSpec.js'
import Row from "react-bootstrap/Row";

class Browse extends React.Component {
    state = {
        allItems: [],
        showingAllItems: true,
        chosenItem: {}
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
    render(){
        return(
            <div>
            <Row style= {{height: '100vh'}}>
                {this.state.showingAllItems ? this.state.allItems.map( (item, index) =><BrowseCards item = {item} handleShow = {this.handleShow}/>) : <ItemSpec chosenItem = {this.state.chosenItem} handleShow = {this.handleShow}/>}
            </Row>
            </div>
        )
    }
}
export {Browse}