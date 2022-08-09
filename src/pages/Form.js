import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Form(props) {
    let navigate = useNavigate();
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents();
    }, []);

    const getStudents = async () => {
        const student = await fetch("http://localhost:5000/students/");
        const response = await student.json();
        setStudents(response);
    };

    const postStudents = async (e) => {
        e.preventDefault();

        const student = { name: e.target.firstChild.value };

        const request = await fetch("http://localhost:5000/students/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(student),
        });
        const response = await request.json();
        if (request.status === 200) {
            navigate(`../success/${student}`, { replace: true });
        } else if (request.status === 409) {
            navigate(`../error/`, { replace: true });
        }
    };

    return (
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
            <h1>Students Form</h1>
            <form onSubmit={postStudents}>
                <input type="text" />
                <button className="btn btn-primary" type="submit">
                    Create Student
                </button>
            </form>
        </main>
    );
}

export default Form;
