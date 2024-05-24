import logo from './logo.svg';
import './App.css';
import Create from './Component/Create';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import View from './Component/View';
import Edit from './Component/Edit';

function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create></Create>}></Route>
          <Route path='/view' element={<View></View>}></Route>
          <Route path='/update/:id' element={<Edit></Edit>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
