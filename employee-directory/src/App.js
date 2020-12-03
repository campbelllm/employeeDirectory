import './App.css';
import Navbar from '../src/components/Navbar';
import Search from '../src/components/Search';
import EmployeeTable from './components/EmployeeTable';

function App() {
  return (
    <>
    <Navbar/>
    <Search/>
    <EmployeeTable/>
    </>
  );
}

export default App;
