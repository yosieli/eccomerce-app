import React from 'react'
import './Signin.css'
import SigninPage from './Signin(HTML)'


export default class Signin extends React.Component{

    state = {
        loggedIn: false
    }

    render(){
        return(
            <div>
                <SigninPage/>
                
            </div>
        )
    }
}