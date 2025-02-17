import { useContext } from 'react'
import './App.css'
import DarkModeToggle from './component/DarkModeToggle';
import Home from './component/Home';

function App() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const filterData = number.filter(item => item >= 5);
  console.log(filterData, "newfilterdata")
  return (
    <>
      <DarkModeToggle />
      <Home/>
    </>
  )
}

export default App
