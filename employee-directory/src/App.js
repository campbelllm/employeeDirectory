import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import EmployeeTable from './components/EmployeeTable';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [click, setClick] = useState(false)
  return (
    <>
    <Navbar/>
    <Search setSearchValue={setSearchValue} setClick={setClick} click={click}/>
    <EmployeeTable  searchValue={searchValue} click={click}/>
    </>
  );
}

export default App;
