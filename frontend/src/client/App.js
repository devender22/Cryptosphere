import '../css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Charts from './charts';
import SearchResultsPage from './pages/SearchResultsPage';

function App() {
  return (
    <div className="App">
    <Router >
    <Routes>
      <Route exact path="/search/:query" element={<SearchResultsPage/>} />
      <Route exact path="/" element={<HomePage/>} />
      <Route exact path="/charts" element={<Charts/>} />
    </Routes>
  </Router>
  </div>
  );
}

export default App
