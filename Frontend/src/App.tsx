import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel'
import Offer from './pages/Offer';
import LoginForm from './pages/LoginForm';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" Component={Home} />
        <Route path="/admin" Component={AdminPanel} />
        <Route path="/offer/:Car_id" Component={Offer} />
        <Route path="/login" Component={LoginForm} />
        <Route path="/register" Component={Register} />
      </Routes>
    </Router>
  );
};

export default App;