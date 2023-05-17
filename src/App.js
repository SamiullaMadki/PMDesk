import './App.css';
import First from './Component/First.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Registration from './Component/Registration';
import RegisterPage from './Component/RegisterPage';
import CompanyRegistration from './Component/CompanyRegistration';
import ProjectWorkspace from './Component/ProjectWorkspace';
import TaskForm from './Component/TaskForm';
import TaskWorkSpace from './Component/TaskWorkSpace';
import NavigatetoLogin from './Component/NavigatetoLogin';
import UserProfile from './Component/UserProfile';
import CompanyProfile from './Component/CompanyProfile';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<First/>}></Route>
        <Route path="Register" element={<RegisterPage/>}> </Route>
        <Route path="CompanyRegistration" element={<CompanyRegistration/>}></Route>
        <Route path="UserRegistration" element={<Registration/>}></Route>
        <Route path="ProjectWorkspace" element={<ProjectWorkspace/>}></Route>
        <Route path="TaskForm" element={<TaskForm/>}></Route>
        <Route path="UserProfile" element={<UserProfile/>}></Route>
        <Route path="CompanyProfile" element={<CompanyProfile/>}></Route>
        
        <Route path="NavigatetoLogin" element={<NavigatetoLogin/>}></Route>

        <Route path="TaskWorkSpace/:val" element={<TaskWorkSpace/>}></Route>

      </Routes>
    </div>

  );
}

export default App;
