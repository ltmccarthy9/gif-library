import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='h-screen w-100% '>
        <header className='w-full text-center'>
          <h1 className='font-bold'>Gif Library</h1>
        </header>
    </main>
  )
}

export default App
