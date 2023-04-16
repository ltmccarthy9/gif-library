
import { useState } from 'react'

function App() {
  

  return (
    <main className='h-screen w-100% m-4'>
        <header className='w-full text-center mt-8'>
          <h1 className='font-bold'>Gif Library</h1>
        </header>

        <form className='flex justify-center items-center m-6 '>
          <input className='p-2 rounded-sm' placeholder='search gifs...'/>
          <button type='submit' className='p-2 bg-red-300 font-bold text-gray-700 rounded-sm
          hover:bg-red-400 active:bg-red-500 '>Go</button>
        </form>

        <section>

        </section>

    </main>
  )
}

export default App
