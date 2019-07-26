import React from 'react'
//import { Link } from 'react-router-dom'
export default  class Details  extends React.Component {
    render() {
        return (
            <div className="Nav">

                <div className="Nav-item Nav-logo">
                  <h1>cart nav</h1>
                    {/* <img src="image" alt="logo" /> */}
                </div>
                <div className="Nav-item Nav-cart">
                 <span className="fa fa-cart-plus"> cart length</span> {this.props.cart.length}
                </div>
            </div>
        );
    }
}
