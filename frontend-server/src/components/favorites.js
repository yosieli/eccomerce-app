import React from "react";
import {Cards} from './Card.js'
import Row from "react-bootstrap/Row";
import Nav from './Home.js'

class Favorites extends React.Component {
    state = {
        myFavorites: [],
    }
    componentDidMount() {
        fetch(`http://localhost:3000/favoriteItems/${localStorage.getItem('user')}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                myFavorites: data
            })
        })
    }
    render(){
        return(
            <div>
            <Nav/>
            <Row>
                {this.state.myFavorites.map( (item, index) =>{
                    return (
                            <Cards item = {item} />
                    )
                })}
            </Row>
            </div>
        )
    }
}
export {Favorites}

