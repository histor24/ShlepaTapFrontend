import React from "react"
import Logoclicker from "../img/logoclicker.png"
import "../css/list.css"
import { IoManOutline } from "react-icons/io5";
import Levels from "../components/levels"
import Shop from "../img/shop.png"



class Button extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            counter: 0,
            text: ""
        }
        this.number = this.number.bind(this);
        this.minus = this.minus.bind(this)
    }
    number() {
        if (this.state.counter < this.state.text) {
            window.location.reload();
            return(
                alert("Недостаточно средств")
            )
        }
    }
    click() {
        this.setState(elem => ({ counter: elem.counter + 1}))
    }
    handleChange() {
        this.setState(ev => ({ counter: ev.counter - this.state.text}))
    }
    minus(e) {
        this.setState({ text: e.target.value});
    }
    showSell() {
        document.getElementById("formMain").style.display = "block";
        document.getElementById("sell").style.display = "none";
    }
    showSellContr() {
        document.getElementById("formMain").style.display = "none";
        document.getElementById("sell").style.display = "block";
    }
    levels() {
        document.getElementById("levels-common").style.display = "block";
    }
    levelsOut() {
        document.getElementById("levels-common").style.display = "none";
    }
    render() {
            return(<div>
                <div id = "main-count">
                <div id = "profile" style = {{ textAlign: "center"}}><IoManOutline />Профиль</div>
                    <div id = "info-balance">
                            <div id = "balance"><p id = "balance-text">Ваш баланс: <br/><b>{this.state.counter}</b></p></div>
                            <div id = "balance"><p id = "balance-text">За клик: <br/><b>1</b></p></div>
                    </div>
                </div>
                <p id = "info-levels">
                    <b><p id = "balance-text" style = {{ position: "relative", bottom: "15px", left: "-5px" }}>Lvl 1: <a style = {{ color: "red" }}>Rookie</a></p></b>
                    <div id = "levels" onClick = {this.levels}>i</div>
                </p>
                <div id = "line"></div>
                <p style = {{ textAlign: "center", height: "300px" }}>
                    <img src = {Logoclicker} alt = "Floppa" id = "floppa" onClick = {this.click}></img>
                </p>
                <p id = "sell" onClick = {this.showSell}>Продать коины</p>
                <p id = "formMain">
                    <input id = "form" onChange = {this.minus}></input>
                    <p id = "addForm">
                        <div id = "levels" style = {{ marginRight: "200px"}} onClick = {this.showSellContr}>x</div>
                        <div id = "levels" style = {{ fontSize: "8px" }} onClick = {() => {this.props.onAdd({
                            text: this.state.text
                        });
                        this.number();
                        this.handleChange();
                        this.props.onCount()}}>OK</div>
                    </p>
                </p>
                    <p id = "new-message">Новые сообщения:</p>
                    <p id = "open">Открыть чат</p>
                    <div id = "icon-overlay">
                        <img id = "icon" src = {Shop}></img>
                    </div>
                    <div id = "levels-common" style={{ display: "none"}}>
                        <Levels onListen = {this.levelsOut}/>
                    </div>
                </div>
            )
        }
    }

export default Button