import React from 'react'
export default  class Cart  extends React.Component {

    render(){
      let item = this.props.item  
      console.log('this is my',item)

    return(
      <div className="Item">
        <div className="Item__img"
            // style={{
            //     backgroundImage: `url($\{item.image\})`,
            //     width: '800px',
            //     height: 300,
            //     backgroundSize: 'contain',
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: 'top left'
            // }}
        >
            <img
                src={item.image_url}
                alt=" Item"
            />
        </div>
        <div className="Item__details">
            <div className="Item__cat">
              <p>{item.item_name}</p>  
            </div>
            <div className="BookItem__price-cart">
                <p>${item.price}</p>
                <button
                    // onClick={this.props.handleClick.bind(this, book)}
                ><span className="fa fa-cart-plus" style={{fontSize:"20px"}}></span> Buy Item</button>
            </div>
            <div className="BootItem__description">
                {/* {item.description} */}
            </div>
            <div className="BookItem__stock" style={{color: item.inStock >= 5 ? '#417505' : '#CE0814'}}>
                {item.inStock} In Stock will display no of items in stock?
            </div>
            <br></br><br></br><br></br>
        </div>
      </div>

    )
    }

}