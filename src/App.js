import { useEffect, useState } from 'react';
import axios from  'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios('/get/data').then ((res) => {
      if (res.status === 200) {
        setData(res?.data?.data);
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={`data:image/png;base64,${data?.cut_pic}`} alt="卡牌" />
        <input style={{"margin-top": "30px"}} type="text" />
      </header>
    </div>
  );
}

export default App;
