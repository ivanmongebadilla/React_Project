import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './app.css';
import Home from './pages/home/Home';
import { Routes, Route, Router } from 'react-router-dom';
import { UserList } from './pages/userList/UserList';
import { UserPage } from './pages/user/UserPage';
import { NewUser } from './pages/newUser/NewUser';

function App() {
  return (
    <div>
      <Topbar />
      <div className='container' >
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path='/users/:userId' element={<UserPage />} />
          <Route path="/newuser" element={<NewUser />} />
        </Routes>
      </div>
    </div> 

  );
}

export default App;
