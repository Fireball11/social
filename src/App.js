import React from 'react';
import './styles/App.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Chat from "./components/Chat/Chat.jsx";

function App() {

   return (
     <div className='App'>
        <Sidebar name="Текст" className="Sidebar"></Sidebar>
        <Chat>text</Chat>
     </div>
   );
}

export default App;
