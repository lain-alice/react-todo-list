import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Main from './components/Main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>        
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
