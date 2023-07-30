import React from 'react'

function Question({value, setValue, question, qno, setQno, min, max}) {

  const val = qno;

  return (
    <div className='flex flex-col w-full h-full gap-5 p-10'>
      <div className={`flex-1 flex flex-col justify-center items-center ${val !== qno ? 'transition-opacity ease-in duration-700 opacity-0' : ''}`}>
        <h1 className='text-5xl font-semibold mb-10'>{question}</h1>
        <div>
          <div className='flex w-full'>
          {/* Buttons */}
          {[...Array(max+1)].map((e, i) => {
            if (i !== 0) return <button className={`border-2 border-gray-500 rounded-md hover:bg-gray-500 mx-0.5 py-4 px-8 ${value === i ? 'bg-gray-400':'bg-gray-600 '}`} onClick={(e) => setValue(i)} key={i}>{i}</button>
          })}
          </div>
          <div className='flex justify-between w-full'>
          {/* Text */}
            <p>Disagree</p>
            <p>Neutral</p>
            <p>Agree</p>
          </div>
        </div>
      </div>
      <div className='w-full flex-none flex justify-between font-medium'>
        {qno !== -1 && <button className='bg-yellow-500 text-black p-4 rounded-md' onClick={(e) => setQno(qno-1)}>Prev</button>}
        {qno !== 5 && <button className='bg-yellow-500 text-black p-4 rounded-md' onClick={(e) => setQno(qno+1)}>Next</button>}
      </div>
    </div>
  )
}

export default Question