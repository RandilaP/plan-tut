import {Component} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/project/:id' element={<ProjectDetails />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
