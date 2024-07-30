import './App.css';
import { Routes, Route } from 'react-router-dom';
import {
  Faculties,
  Login,
  Settings,
  Departments,
  Teachers,
  Students,
  TeacherSettings,
  TeacherStudents,
  TeacherLessons,
  TeacherChats
} from './views/pages';


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />

      //Admin
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/faculties" element={<Faculties />} />
      <Route path="/admin/departments" element={<Departments />} />
      <Route path="/admin/teachers" element={<Teachers />} />
      <Route path="/admin/students" element={<Students />} />


      //Teacher
      <Route path='/teacher/settings' element={<TeacherSettings />} />
      <Route path='/teacher/students' element={<TeacherStudents />} />
      <Route path='/teacher/lessons' element={<TeacherLessons />} />
      <Route path='/teacher/chats' element={<TeacherChats />} />
    </Routes>
  );
}

export default App;
