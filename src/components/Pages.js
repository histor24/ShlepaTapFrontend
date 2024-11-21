import React, { forwardRef } from "react"
import {useRef} from "react"
import Main from "./mainPage"
import "../css/list.css"

function Pages() {
        const ref = useRef(null);
        const newref = useRef(null);

        const handleClick = () => {
            ref.current?.scrollIntoView({behavior: "smooth"})
        }
        const mainClick = () => {
            newref.current?.scrollIntoView({behavior: "smooth"})
        }
        return (<div id = "mediaType">
             <div>
                <div id = "thirdPage-overlay" ref = {newref}>
                    <Main />
                </div>
             </div>
        </div>
    )
}

export default forwardRef(Pages)