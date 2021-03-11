import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import { AuthProvider } from './hooks/AuthContext';

// import Routes from './routes';
import ProtectedRoute from './routes/ProtectedRoute';

import Login from './pages/Login';
import Navers from './pages/Navers';
import CreateNaver from './pages/CreateNaver';
import EditNaver from './pages/EditNaver';
import ShowNaverModal from './components/ShowNaverModal';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <ProtectedRoute path="navers" element={<Navers />} />
          <ProtectedRoute path="/navers/create" element={<CreateNaver />} />
          <ProtectedRoute path="/navers/edit/:id" element={<EditNaver />} />
          {/* <ProtectedRoute path="navers/update" element={} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
