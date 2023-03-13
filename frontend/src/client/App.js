import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import Info from './components/Info';
function App() {
  return (
    <div className="App">
    <Router >
    <Routes>
      <Route exact path="/search/:query" element={<SearchResultsPage/>} />
      <Route exact path="/" element={<HomePage/>} />
    </Routes>
  </Router>
  </div>
  );
}

export default App
