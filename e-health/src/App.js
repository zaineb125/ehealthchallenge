import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import ReclamerProduit from "./screens/ReclamerProduit";
import Search from "./components/Search";
import DescriptionAlerts from "./components/Alerts";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/reclamer" element={<ReclamerProduit />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/alert" element={<DescriptionAlerts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
