import React from 'react'
//import Payment from './Payment.js'
import ShowDetails from './ShowDetails'
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
                
                    <Button   variant="outline-success"    size="lg" onClick={()=>this.props.removeItem(item)}    > Remove Item</Button>
                    <Button onClick={()=>this.props.byeItems(item)} > Bye Item</Button>
            
                <br></br>
                <br></br>
                <div></div>

                <br></br>
                {/* <div className="BookItem__stock" style={{color: item.inStock >= 5 ? '#417505' : '#CE0814'}}>
                    {item.inStock} In Stock will display no of items in stock?
                </div> */}
                
            </div>
        )
    }

}