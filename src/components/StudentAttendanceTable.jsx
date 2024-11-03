// src/components/AttendanceTable.jsx
import React from 'react';

export default function StudentAttendanceTable() {
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
              <th scope="col">Name</th>
              <th scope="col">Status</th>
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
