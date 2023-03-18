import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useTable } from 'react-table'
//import ReactTable from 'react-table-v6'
//import 'react-table-v6/react-table.css'
//import api from '../api'
//import styled from 'styled-components'

function EditPet(props) {
   let navigate = useNavigate();
   const updatePet = (event) => {
        event.preventDefault()
      navigate ("/updatePet/" + props.id);
      
    }
    return (<button onClick={updatePet}>Edit</button>);
}

function DeletePet(props) {
const    deletePet = (event) => {
        event.preventDefault()

        if (
            window.confirm(
                `You are about to delete a pet record. Are you sure?`,
            )
        ) {
            //api.deletePetById(props.id) place delete function here
            window.location.reload()
        }
    }
    return (<button onClick={deletePet}>Delete</button>);
}

function ShowPets(props){
  const [pets, setPets] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
      const fetchData = async () => {
      setLoading(true);

      await api.getAllPets().then(result => {
          setPets(result.data.data);
          setLoading(false);

      }).catch((error) => {
          console.log('error in fetchData:', error)
        });
      };  
      fetchData();

  },[]);

  const columns = [
    {   Header: 'Photo',
        accessor: 'petPhoto',
        filterable: false,
    },  
    {   Header: 'Pet Name',
          accessor: 'petName',
          filterable: true, //search bar
          Filter: ({ filter, onChange, column }) => (
              <div>
                <input
                  type="text"
                  placeholder={`Search ${column.Header}...`}
                  value={filter ? filter.value : ''}
                  onChange={(event) => onChange(event.target.value)}
                />
              </div>
            ),
      },
      {   Header: 'Pet Category',
          accessor: 'petCategory',
          filterable: false,
      },
      {   Header: 'Age',
          accessor: 'age',
          filterable: false,
      },
      {   Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span> <button id={props.original._id} /> </span>
              )
          },
      },
      {
          Header: '',
          accessor: '',
          Cell: function(props) {
              return (
                  <span> <button id={props.original._id} /> </span>
              )
          },
      }

  ]

  let showTable = true
  if (!pets.length) 
  {
      showTable = false
  }

  return (
      <Wrapper>
      {showTable && (
          <ReactTable
              data={pets}
              columns={columns}
              showPagination ={false} 
              showPageSizeOptions={false}
          />
      )}
  </Wrapper>
  )
}

export default ShowStudents