import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Mentees from "./pages/Mentees";
import Mentors from "./pages/Mentors";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/mentors" Component={Mentors} />
        <Route path="/mentees" Component={Mentees} />
      </Routes>
    </Router>
  );
}

export default App;
