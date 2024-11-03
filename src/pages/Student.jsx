import React, { useState } from 'react'
import QRScanner from '../components/QRScanner';
import StudentAttendanceTable from '../components/StudentAttendanceTable'

function Student() {
    const [showScanner, setShowScanner] = useState(false);

    return (
        <div className='row'>
            <div className='d-flex justify-content-center pt-2 pb-2 mb-3 bg-success'>
                <h3 className='text-light text-bold text-uppercase'>Student</h3>
            </div>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <button onClick={() => setShowScanner(false)} className={`nav-link ${!showScanner ? 'active': ''}`}>Attendance Data</button>
                </li>
                <li className="nav-item">
                    <button onClick={() => setShowScanner(true)} className={`nav-link ${showScanner ? 'active': ''}`}>QR Scanner</button>
                </li>
            </ul>
            <div>
                {showScanner ? <QRScanner /> : <StudentAttendanceTable />}
            </div>

        </div>
    )
}

export default Student