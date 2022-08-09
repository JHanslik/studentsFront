import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
    return (
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
            <h1>Error 409</h1>
            <h2>Student already exist !</h2>
            <Link to={"/form"}>
                <button className="btn btn-primary">Retry ?</button>
            </Link>
            <Link to={"/"}>
                <button className="btn btn-primary">Home</button>
            </Link>
        </main>
    );
}

export default Error;
