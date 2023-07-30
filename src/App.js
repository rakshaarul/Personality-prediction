import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/home';
import Questionnaire from './Pages/questionnaire';
import Result from './Pages/result';

function App() {

  const [result, setResult] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="questionnaire" element={<Questionnaire setResult={setResult} />} ></Route>
        <Route path="result" element={<Result result={result} />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App