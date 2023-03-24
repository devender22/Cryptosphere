import '../css/App.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import Info from './components/Info';
import Events from './components/Events/Events';
import Overview from './components/Overview';
import News from './components/News/News'
import ChartSection from './components/Charts/ChartSection';

function App() {
  return (
    <div className="App">
    <Router >
    <Routes>
      <Route exact path="/:query" element={<SearchResultsPage/>} />
      <Route path="/" element={<Navigate to="/Ethereum/overview" />}></Route>
      <Route path="/Ethereum" element={<Navigate to="/Ethereum/overview" />}></Route>
      <Route exact path="/Ethereum/events" element={<Events/>}></Route>
      <Route exact path="/Ethereum/overview" element={<Overview />}></Route>
      <Route exact path="/Ethereum/news" element={<News/>}></Route>
      <Route exact path="/Ethereum/charts" element={<ChartSection/>}></Route>

    </Routes>
  </Router>
  </div>
  );
}

export default App
