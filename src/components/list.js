import React from "react"
import Button from "./counter"
import "../css/list.css"



class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [
                {
                    id: 1,
                    text: ""
                }
            ]
        }
        this.addUser = this.addUser.bind(this)
        this.hide = this.hide.bind(this)
    }
    addUser(user) {
        const id = this.state.events.length + 1
        this.setState( { events: [...this.state.events, {id, ...user}]})
    }
    render() {
        
        return (<div>
            <Button onAdd = {this.addUser} onCount = {this.hide}/>
            <div id = "main-message">
                {this.state.events.map((el) => (<div key = {el.id}>
                    <p id = "message-text">{el.text}</p>
                    </div>))}
            </div>
            
        </div>

        
        )
    }

    hide() {
        if (this.state.events.length > 2) {
            return(
                document.getElementById("open").style.visibility = "visible"
            )
        }
    }
    
}

export default List