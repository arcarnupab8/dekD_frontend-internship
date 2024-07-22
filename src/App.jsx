import { Route, Routes } from 'react-router-dom'
import './App.css'
import Banner from './components/Banner'
import List from './components/List'
import Create from './components/Create'

function App() {

  return (
    <div className='container'>
      <Banner/>
      <div className='content'>
        <Routes>
          <Route index element={<List/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes> 
      </div>
    </div>
  )
}

export default App
