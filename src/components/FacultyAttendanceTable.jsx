import React from 'react';

export default function FacultyAttendanceTable() {
  const data = [
    { id: 1, name: 'John Doe', status: 'Present' },
    { id: 2, name: 'Jane Doe', status: 'Absent' },
  ];

  return (
    <div className='row'>
      <div className='col-md-12'>
        <table className='table'>
          <thead className='thead-dark'>
            <tr>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
