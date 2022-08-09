import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students(props) {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const request = await fetch(`http://localhost:5000/students`);
        const response = await request.json();
        setStudents(response);
    };

    return (
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light">
            <Link to="/form">
                <button className="btn btn-primary">Create New Student</button>
            </Link>
            {students.map((student) => {
                return <h2 key={student.name}>{student.name}</h2>;
            })}
        </main>
    );
}

export default Students;
