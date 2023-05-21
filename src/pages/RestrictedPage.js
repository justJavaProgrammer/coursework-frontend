import React from 'react';
import {Link} from "react-router-dom";

const RestrictedPage = () => {
    return (
        <div>
            <h1>Заборонено!</h1>
            <p>Сторінку можуть перегляди лише адміністратори або комендант!</p>
            <Link to={"/login"}>Увійти</Link>
        </div>
    );
};

export default RestrictedPage;
