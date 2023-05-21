import React from 'react'
import {Link} from "react-router-dom";


function Home(props) {
    return (
        <div>
            <p>Привіт! Це программа для того, щоб автоматизувати "Студмістечко"</p>
            <div className={"links"}>
                <div>
                    <Link to={"/cards"}>Список студентських карток</Link>
                </div>
                <div>
                    <Link to={"/cards/create"}>Створити студентську картку</Link>
                </div>
                <div>
                    <Link to={"/dormitory"}>Пошук гуртожитків</Link>
                </div>
                <div>
                    <Link to={"/login"}>Вхід у систему для коменданта</Link>
                </div>
            </div>

        </div>
    );
}

export default Home;