import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import './App.css';
import './common/styles/base.css';
import './common/styles/common.css';
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Add other routes here */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
