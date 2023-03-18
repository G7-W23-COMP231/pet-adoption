import { useTable } from 'react-table';

function Table() {
  const data = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];

  const columns = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    {
      Header: 'Actions',
      Cell: row => (
        <div>
          <button onClick={() => handleEdit(row)}>Edit</button>
          <button onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
    },
  ];

  const tableInstance = useTable({ data, columns });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const handleEdit = row => {
    console.log('Edit row:', row.original);
  };

  const handleDelete = row => {
    console.log('Delete row:', row.original);
  };

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
