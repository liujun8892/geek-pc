import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { DatePicker } from 'antd';

import Home from './pages/layout';
import Login from './pages/login';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/login" Component={Login}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
