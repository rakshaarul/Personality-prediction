import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className='flex w-full h-screen bg-black text-white'>
        <div className='flex-1 flex flex-col justify-around items-center h-full p-10 text-center'>
          <h1 className='text-5xl font-medium'>Personality Prediction</h1>
          <p className=''>The Big Five Inventory measures an individual based on the Five-Factor Model of personality. The Five can be remembered by using the acronym "O.C.E.A.N.": Openness, Conscientiousness, Extroversion, Agreeableness and Neuroticism.</p>
          <Link className='font-medium bg-yellow-500 text-black p-4 rounded-md' to='/questionnaire'>Start Evaluating</Link>
        </div>
        <div className='flex-1 flex justify-center items-center h-full p-10'>
          <img className='animate-spin-slow' src="https://us.123rf.com/450wm/kubko/kubko1710/kubko171000047/88536297-heads-people-concept-symbol-of-communication-between-people-vector-ilustration.jpg?ver=6" alt="logo" width={350} height={350} />
        </div>
      </div>
      <div className='flex w-full h-screen bg-black text-white'>
        <div className='flex flex-1 flex-col justify-center items-center text-center p-20'>
          <h1 className='text-5xl font-medium mb-16'>About OCEAN</h1>
          <p className='my-2'>
            <b>Openness to experience:</b> Individuals high in openness to experience value creativity, curiosity, and learning. They are often interested in new ideas and perspectives.
          </p>
          <p className='my-2'>
            <b>Conscientiousness:</b> Individuals high in conscientiousness value responsibility, organization, and dependability. They are often goal-oriented and motivated to achieve their objectives.
          </p>
          <p className='my-2'>
            <b>Extraversion:</b> Individuals high in extraversion value social interaction, stimulation, and excitement. They are often outgoing, talkative, and assertive.
          </p>
          <p className='my-2'>
            <b>Agreeableness:</b> Individuals high in agreeableness value cooperation, kindness, and empathy. They are often compassionate, considerate, and supportive of others.
          </p>
          <p className='my-2'>
            <b>Neuroticism:</b> Individuals high in neuroticism value emotional stability, security, and predictability. They may be prone to anxiety, worry, and mood swings.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home