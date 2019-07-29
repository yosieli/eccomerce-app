import React from "react";
import {FavoritesCard} from './components/favorites_card.js'
import Row from "react-bootstrap/Row";

class Favorites extends React.Component {
    state = {
        myFavorites: [],
    }
    componentDidMount() {
        fetch('http://localhost:3000/favoriteItems/hk72')
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
            <Row>
                {this.state.myFavorites.map( (item, index) =>{
                    return (
                            <FavoritesCard item = {item} />
                    )
                })}
            </Row>
            </div>
        )
    }
}
export {Favorites}

