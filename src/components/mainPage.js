import React from "react"
import "../css/mainPage.css"
import List from "./list"

class MainPage extends React.Component {
    render() {
                return(
                    <div style = {{ width:"375", height: "812px"}}>
                        <List />
                    </div>
                )
            }
        }
        

export default MainPage

