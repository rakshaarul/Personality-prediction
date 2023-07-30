import React, {useState, useEffect} from "react";
import Question from "../Components/Question";
import { Link, useNavigate } from "react-router-dom";
import ProgressBar from "../Components/ProgressBar";

function Questionnaire({setResult}) {
    let navigate = useNavigate();

  const [qno, setQno] = useState(0);
  
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(0);
  const [value1,setValue1] = useState(0);
  const [value2,setValue2] = useState(0);
  const [value3,setValue3] = useState(0);
  const [value4,setValue4] = useState(0);
  const [value5,setValue5] = useState(0);

  const [res, setRes] = useState(null);

  const handleEvaluate = async (e) => {
    console.log(value1, value2, value3, value4, value5)
    console.log(JSON.parse(JSON.stringify(["Male", 42, 8, 4, 3, 1, 7])))
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "gender": gender, 
        "age": age, 
        "o" : value1, 
        "n" : value2, 
        "c" : value3, 
        "a" : value4, 
        "e" : value5
      })
    };
      const response = await fetch('https://aibackend-pavanapril14.b4a.run/', requestOptions);
      if (response.ok) {
        response.json().then(json => {
          setResult(json);
          navigate("/result");
        })
      }
  }

  return (
    <div>
      <div className="flex flex-col h-screen w-screen items-center justify-center text-center bg-black text-white animate-fade">
        <ProgressBar className="transition duration-300 easy" progressPercentage={qno*20}/>
        <div className="w-full flex justify-between p-10 font-medium">
          <Link className='bg-yellow-500 text-black p-4 rounded-md' to='/'>Home</Link>
          {qno === 5 && <button className="bg-yellow-500 text-black p-4 rounded-md" onClick={(e) => handleEvaluate(e)}>Evaluate</button>}
        </div>
        {qno === 0 && (
            <div className='flex flex-col w-full h-full gap-5 p-10'>
                <div className={`flex-1 flex flex-col justify-center items-center ${qno !== 0 ? 'transition-opacity ease-in duration-700 opacity-0' : ''}`}>
                    <h1 className='text-5xl font-semibold mb-10'>What's the age and the gender of the person?</h1>
                    <div>
                        <div className='flex w-full'>
                            <select value={gender} onChange={e => setGender(e.target.value)} className='w-[100px] mr-10 bg-black text-white p-4 appearance-none border-b-2'>
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                            <input value={age} onChange={e => setAge(e.target.value)} type='number' className='w-[100px] p-4 focus:outline-none border-b-2 bg-black text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-right' placeholder='Age' min='0' max='100' />
                        </div>
                    </div>
                </div>
                <div className='w-full flex-none flex justify-end font-medium'>
                    <button className='bg-yellow-500 text-black p-4 rounded-md' onClick={(e) => setQno(qno+1)}>Next</button>
                </div>
            </div>
        )}
        {qno === 1 && <Question value={value1} setValue={setValue1} question={"Is the person original, unique, creative and highly imaginative?"} qno={qno} setQno={setQno} min={1} max={8} />} 
        {qno === 2 && <Question value={value2} setValue={setValue2} question={"Is the person emotionally stable, calm and composed?"} qno={qno} setQno={setQno} min={1} max={8} />}
        {qno === 3 && <Question value={value3} setValue={setValue3} question={"Is the person diligent, focussed, organized and efficient?"} qno={qno} setQno={setQno} min={1} max={8} />}
        {qno === 4 && <Question value={value4} setValue={setValue4} question={"Is the person trustworthy, considerate, cooperative and helpful?"} qno={qno} setQno={setQno} min={1} max={8} />}
        {qno === 5 && <Question value={value5} setValue={setValue5} question={"Is the person enthusiastic, sociable, outgoing and assertive?"} qno={qno} setQno={setQno} min={1} max={7} />}
      </div>
    </div>
  )
}

export default Questionnaire