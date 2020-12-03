import React, {useState} from 'react';
import ReactTable from "react-table-6";
import 'react-table-6/react-table.css';


const EmployeeTable = () =>  {  

  const data= [
    {
      name: "Stanley Hudson",
      department: "Sales",
      manager: "Michael Scott",
      tenure: "20 years",
    },
    {
      name: "Creed Bratton",
      department: "Undecided",
      manager: "Michael Scott",
      tenure: "12 years",
    },
    {
      name: "Ryan Howard",
      department: "Intern",
      manager: "Michael Scott",
      tenure: "4 months" ,
    },
    {
      name: "Jim Halpert",
      department: "Sales",
      manager: "Michael Scott",
      tenure: '5 years' ,
    },
    {
      name: "Dwight Schrute",
      department: "Sales",
      manager: "Michael Scott",
      tenure: 'Infinity',
    },
    {
      name: "Kevin Malone",
      department: "Finance",
      manager: "Michael Scott",
      tenure: '15 years',
    }
  ];
    
    const columns = [
      {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Department',
      accessor: 'department'
    },
    {
      Header: 'Manager',
      accessor: 'manager'
    },
    {
      Header: 'Tenure',
      accessor: 'tenure'
    }
  ];

  

  return(
   <div className='table'>
      <ReactTable
                data={data}
                columns={columns}
                defaultPageSize = {10}
                pageSizeOptions = {[5,10,15]}
              />
   </div>
  )

  
}


export default EmployeeTable;