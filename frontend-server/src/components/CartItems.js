import React from 'react'
import Payment from './Payment.js'
import ShowDetails from './ShowDetails'
//import Button from 'react-bootstrap/Button'
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
    //   let total = this.props.total
      let item = this.props.item  
      
    return(
        <div>
            <div >
            <img src={item.image_url} alt=" Item"  onClick={this.ShowDetails}/>
            {this.state.showDetails ? <ShowDetails name={item.item_name} price={item.price} description={item.description}  /> : null}
            </div>
        
           <div >
              <p>{item.item_name}</p>  
           </div>
            <div >
              <p>${item.price}</p>
            </div >
               {/* <p>total amount:{this.props.totalAmount}</p>  */}
            <div>
                <button  onClick={()=>this.props.removeItem(item)} > Remove Item</button>
            </div>
             
            <div>
                <button onClick={()=>this.props.byeItems(item)} > Bye Item</button>
            </div>

            {/* <Button variant="outline-primary"></Button> */}

            <br></br>
            <div className="BookItem__stock" style={{color: item.inStock >= 5 ? '#417505' : '#CE0814'}}>
                {item.inStock} In Stock will display no of items in stock?
            </div>
            
            <br></br><br></br><br></br>
        </div>
            
    )
    }

}