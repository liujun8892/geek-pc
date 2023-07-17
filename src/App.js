import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/layout';
import Loging from './pages/login';
function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/login">登录</Link>
        <Link to="/home">首页</Link>

        <Routes>
          <Route path="/home" Component={Home}></Route>
          <Route path="/login" Component={Loging}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
