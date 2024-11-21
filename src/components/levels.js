import React from "react"
import "../css/levels.css"

class Levels extends React.Component {
    render() {
        return(<div id = "overlay-all">
            <div id = "black-overlay"></div>
            <div id = "white-overlay">
                <p onClick = {() => {this.props.onListen()}} id = "closeWhite">X</p>
                <div style = {{ position: "relative", top: "15px"}}>
                        <b><p id = "balance-text" style = {{ position: "relative", bottom: "15px", width: "110px", margin:"auto"}}>Lvl 1: <a style = {{ color: "red" }}>Rookie</a></p></b>
                        <div id = "line" style = {{ width: "200px"}}></div>
                        <p style = {{ width: "200px", textAlign: "center", margin: "auto", marginTop: "10px"}}>
                            <a style = {{ marginRight: "135px"}}>0 SC</a><a>9 SC</a>
                        </p>
                    <div style = {{ marginTop: "20px"}}>
                        <b><p id = "balance-text" style = {{ position: "relative", bottom: "15px", width: "200px", margin:"auto"}}>Lvl 1: <a style = {{ color: "red" }}>Rookie</a></p></b>
                        <div id = "line" style = {{ width: "200px"}}></div>
                        <p style = {{ width: "200px", textAlign: "center", margin: "auto", marginTop: "10px"}}>
                            <a style = {{ marginRight: "135px"}}>0 SC</a><a>9 SC</a>
                        </p>
                    </div>
                    <div style = {{ marginTop: "20px"}}>
                        <b><p id = "balance-text" style = {{ position: "relative", bottom: "15px", width: "200px", margin:"auto"}}>Lvl 1: <a style = {{ color: "red" }}>Rookie</a></p></b>
                        <div id = "line" style = {{ width: "200px"}}></div>
                        <p style = {{ width: "200px", textAlign: "center", margin: "auto", marginTop: "10px"}}>
                            <a style = {{ marginRight: "135px"}}>0 SC</a><a>9 SC</a>
                        </p>
                    </div>
                    <div style = {{ marginTop: "20px"}}>
                        <b><p id = "balance-text" style = {{ position: "relative", bottom: "15px", width: "200px", margin:"auto"}}>Lvl 1: <a style = {{ color: "red" }}>Rookie</a></p></b>
                        <div id = "line" style = {{ width: "200px"}}></div>
                        <p style = {{ width: "200px", textAlign: "center", margin: "auto", marginTop: "10px"}}>
                            <a style = {{ marginRight: "135px"}}>0 SC</a><a>9 SC</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Levels