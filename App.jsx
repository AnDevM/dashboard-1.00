import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App () {
  return (
    <>
      <Header />
      <main className='max-w-7xl m-auto'>
        <Outlet />
      </main>
    </>
  )
}

export default App