import React from 'react';
import { Link} from "react-router-dom";

function Result({result}) {

    const description = {
        "extraverted": "They are typically outgoing, have high self-esteem, are energized by being around other people, are socially confident, and enjoy being in large social gatherings or speaking in public. They also tend to be sociable and friendly.",
        "serious": "They show deep thoughts, not joking, or they are in a situation that requires careful thought.",
        "dependable": "They have many characteristics that make them a good choice to call in the case of an emergency. You can often depend on this type of person to remain calm, evaluate the situation, and determine a fair and effective solution. They remain loyal and stable, meaning they may not falter in their actions or judgements.",
        "lively": "They are lively as they behave in an enthusiastic and cheerful way. A lively person has an energetic personality, is always on alert, and prefers being active as opposed to just hanging around."
    }

  return (
    <div className='flex flex-col h-screen w-screen p-10 items-center text-center bg-black text-white animate-fade'>
        <div className='w-full flex justify-between'>
            <Link className='bg-yellow-500 text-black p-4 rounded-md' to='/'>Home</Link>
            <Link className='bg-yellow-500 text-black p-4 rounded-md' to='/questionnaire'>Retake</Link>
        </div>
        <div className='h-full flex flex-col justify-center'>
            <h1 className='text-lg mb-2'>The person is identified to be</h1>
            <h1 className='text-7xl mb-10'>{result.personality}</h1>
            <h1 className='text-2xl mb-10'>OCEAN Rating: {result.values[2]}, {result.values[4]}, {result.values[6]}, {result.values[5]}, {result.values[3]}</h1>
            <p className=''>{description[result.personality]}</p>
        </div>
    </div>
  )
}

export default Result