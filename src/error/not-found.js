import React from 'react'
import "../styles/not-found.css"
import {Link} from "react-router-dom";

function NotFound(props) {

    return (
        <div>
            <div className={"text"}>
                <p>
                    Отакої! Такої сторінки не існує!
                </p>
            </div>

            <div className={"links"}>
                <Link to={"/"}>Повернутись до домашньої сторінки</Link>
            </div>
        </div>
    )
}


export default NotFound;