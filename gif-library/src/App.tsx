import Gifcard from './components/Gifcard'
import { FormEvent } from 'react'
import { useState } from 'react'

function App() {
  
  const [query, setQuery] = useState('')
  const [gifs, setGifs] = useState([])

  const apiKey = import.meta.env.VITE_GIPHY_KEY

  async function getGifs(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=50&offset=0&rating=g&lang=en`,{
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
    <main className='h-screen w-100% xl:mx-60 pt-20'>
        <nav className='w-full text-center flex pt-2 pb-4 px-2 fixed top-0 z-10 bg-[#242424]'>
          <h1 className='font-bold text-3xl mt-2'>Gif Library</h1>
          <form onSubmit={(e) => getGifs(e)} className='flex justify-center items-center mx-4 mt-2'>
            <input value={query} onChange={(e) => setQuery(e.target.value)} className='p-2 rounded-sm' placeholder='search gifs...'/>
            <button type='submit' className='py-2 px-4 bg-red-300 font-bold text-gray-700 rounded-sm
             hover:bg-red-400 active:bg-red-500 ease-in duration-75 '>Go</button>
          </form>
        </nav>

      

        <section className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5'>
          {gifs.length > 0 ? gifs.map((gif) => (
              <Gifcard gifUrl={gif.images.original.url} key={gif.id} />
          )) : <h2 className='text-center text-2xl'>no gifs...</h2>}
        </section>

    </main>
  )
}

export default App
