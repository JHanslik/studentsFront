import React from "react";
import { Link } from "react-router-dom";

function Success(props) {
    return (
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
            <h1>Success !</h1>
            <Link to={"/"}>
                <button className="btn btn-primary">Home</button>
            </Link>
        </main>
    );
}

export default Success;
