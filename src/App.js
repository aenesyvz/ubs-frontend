import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Login,
  Settings
} from './views/pages';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/admin/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
