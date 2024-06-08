import "./App.css";
import Header from "./components/header";
import Start from "./pages/start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
