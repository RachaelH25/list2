import "./Components/CSS/reset.css";
// import "./App.css";
import MyList from "./Components/MyList";
import Header from "./Components/Header";
import CreateList from "./Components/CreateList";
import Inspiration from "./Components/Inspiration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/mylist" element={<MyList />} />
                    <Route path="/createlist" element={<CreateList />} />{" "}
                    <Route path="/inspiration" element={<Inspiration />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
