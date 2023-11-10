
import React, { PureComponent } from 'react'
import axios from 'axios'

class Greeting extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            greetings : null
        }
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8080/greeting")
        .then(response=>{
            console.log(response)
            this.setState({greetings:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }

    render() {
        const {greetings} = this.state
        return (
            <div>
               {greetings}
            </div>
                 
           
        )
    }
}

export default Greeting
