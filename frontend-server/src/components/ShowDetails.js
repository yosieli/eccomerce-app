import React from 'react'
export default  class ShowDetails  extends React.Component {
   
    render() {
       
        return (
                <div>
                  <h3>{this.props.name}</h3>
                  <h3>{this.props.price}</h3>
                  <div>
                    <h3>{this.props.description}</h3>
                  </div> 
                    
                </div>
        )
           
    }

}