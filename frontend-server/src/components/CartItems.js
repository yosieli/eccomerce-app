import React from 'react'
import Payment from './Payment.js'
export default  class Cart  extends React.Component {

    handleClick = (id) => {
      console.log(id)

    }

    render(){
      let total = this.props.total
      let item = this.props.item  
      
    return(
      <div className="Item">
        <div className="Item__img"
           
        >
            <img
                src={item.image_url}
                alt=" Item" onClick={()=>this.props.showDetails(item.id)}
            />
        </div>
        <div className="Item__details">
            <div className="Item__cat">
              <p>{item.item_name}</p>  
            </div>
            <div className="BookItem__price-cart">
                <p>${item.price}</p>
            <div className="BootItem__description">
               <p>total amount:{total}</p> 
            </div>
                <button  onClick={()=>this.props.byeItem(item.id)} > Buy Item</button>
            </div>
            <br></br>
            <div className="BookItem__stock" style={{color: item.inStock >= 5 ? '#417505' : '#CE0814'}}>
                {item.inStock} In Stock will display no of items in stock?
            </div>
            <br></br><br></br><br></br>
        </div>
      </div>

    )
    }

}