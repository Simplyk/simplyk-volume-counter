import React, {useState} from "react"
import ReactDOM from "react-dom"
import reactToWebComponent from "react-to-webcomponent";

function SimplykVolumeCounter() {
    const [count, setCount] = useState(0)

    const upCount = () => {
        setCount(prev => prev +2)
    } 

    return (<div>hello {count}<button onClick={upCount}>CLick</button></div>)
}

customElements.define("simplyk-volume-counter", reactToWebComponent(SimplykVolumeCounter, React, ReactDOM))