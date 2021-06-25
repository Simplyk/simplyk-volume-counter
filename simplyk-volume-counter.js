import * as React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component {
    constructor(){
        super(),
        this.state ={
            count:0
        }
    }

     upCount(){
         this.setState(prev => ({count : prev.count+1}))
     } 

    render() {
        return (<div>hello {this.state.count}<button onClick={() => this.upCount()}>CLick</button></div>)
    }
}

ReactDOM.render(<Counter/>, document.getElementById("app"))