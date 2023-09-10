import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <div className='body'>
      <Sidebar name="Текст" className="Sidebar"></Sidebar>
    </div>
  );
}

export default App;
