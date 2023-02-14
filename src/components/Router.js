import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Login from "./Login";
import FormParent from "./FormParent";
import Hello from "./Hello";
import { Link } from 'react-router-dom';

export default function Router() {
    return (
        <div>
            <div>
                <Link to='/FormParent'>לטופס</Link>
                <Link to='/Hello'> לדף ההנחיות </Link>
            </div>
            <Routes>
                <Route path="/FormParent" element={<FormParent />} />
                <Route path="/Hello" element={<Hello />} />
                <Route exact path="/" component={<Login />} />
            </Routes>
        </div>
    )
}
