import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./components/pagenotfound/PageNotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
