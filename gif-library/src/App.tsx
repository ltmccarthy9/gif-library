import { FormEvent } from 'react'
import { useState } from 'react'

function App() {
  
  const [query, setQuery] = useState('')
  const [gifs, setGifs] = useState([])

  const apiKey = import.meta.env.VITE_GIPHY_KEY

  async function getGifs(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en`,{
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setGifs(data.data)
      console.log(gifs)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <main className='h-screen w-100% m-4'>
        <header className='w-full text-center mt-8'>
          <h1 className='font-bold'>Gif Library</h1>
        </header>

        <form onSubmit={(e) => getGifs(e)} className='flex justify-center items-center m-6 '>
          <input value={query} onChange={(e) => setQuery(e.target.value)} className='p-2 rounded-sm' placeholder='search gifs...'/>
          <button type='submit' className='p-2 bg-red-300 font-bold text-gray-700 rounded-sm
          hover:bg-red-400 active:bg-red-500 ease-in duration-75 '>Go</button>
        </form>

        <section className='grid grid-cols-4'>
          {gifs.length > 0 ? gifs.map((gif) => (
              <div className='m-2' key={gif.id}>
                <img src={gif.images.original.url} />
              </div>
          )) : <h2 className='text-center text-2xl'>no gifs...</h2>}
        </section>

    </main>
  )
}

export default App
