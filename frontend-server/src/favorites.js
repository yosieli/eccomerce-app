import React from "react";
import {FavoritesCard} from './components/favorites_card.js'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
class Favorites extends React.Component {
    state = {
        myFavorites: [],
        
        // user_id: "",
        // item_id: "",
        // item_name: "",
        // price: "",
        // image_url: "",
        // description: ""
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

// const divStyle = {
//     color: 'blue',
//     backgroundImage: 'url(' + imgUrl + ')',
//   };
  
//   function HelloWorldComponent() {
//     return <div style={divStyle}>Hello World!</div>;
//   }