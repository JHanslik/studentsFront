import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Error from "./pages/Error";
import Form from "./pages/Form";
import Students from "./pages/Students";
import Success from "./pages/Success";

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Students />} />
                <Route path="/form" element={<Form />} />
                <Route path="/success/:name" element={<Success />} />
                <Route path="/error" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
