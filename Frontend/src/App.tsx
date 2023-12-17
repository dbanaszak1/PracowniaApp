import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel'
import Offer from './pages/Offer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" Component={Home} />
        <Route path="/admin" Component={AdminPanel} />
        <Route path="/offer/:Car_id" Component={Offer} />
      </Routes>
    </Router>
  );
};

export default App;