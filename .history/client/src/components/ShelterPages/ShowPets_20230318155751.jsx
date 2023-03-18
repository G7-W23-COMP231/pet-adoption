import React from 'react';
import { useTable } from 'react-table';

function ShowPets() {
  // Define the data and columns for the table
  const data = React.useMemo(
    () => [
      {
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com',
        city: 'New York',
      },
      {
        name: 'Jane Smith',
        age: 25,
        email: 'janesmith@example.com',
        city: 'Los Angeles',
      },
      {
        name: 'Bob Johnson',
        age: 40,
        email: 'bobjohnson@example.com',
        city: 'Chicago',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {   Header: '',
      accessor: '',
      Cell: function(props) {
          return (
              <span> <button onClick={updateUser}>Edit</button> </span>
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
    ],
    []
  );

  // Use the useTable hook to create the table instance
  const tableInstance = useTable({ data, columns });

  // Extract the necessary table props and functions from the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  // Render the table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ShowPets;