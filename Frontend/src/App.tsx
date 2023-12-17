import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" Component={Home} />
        <Route path="/admin" Component={AdminPanel} />
      </Routes>
    </Router>
  );
};

export default App;