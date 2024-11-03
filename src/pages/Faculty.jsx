import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCodeGenerator from '../components/QRCodeGenerator';
import FacultyAttendanceTable from '../components/FacultyAttendanceTable';

function Faculty() {
    const [showQR, setShowQR] = useState(false);
    return (
        <div>
            <div className='row'>
                <div className='d-flex justify-content-center pt-2 pb-2 mb-3 bg-success'>
                    <h3 className='text-light text-bold text-uppercase'>Faculty</h3>
                </div>
            </div>
            <div className='row'>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <button onClick={() => setShowQR(false)} className={`nav-link ${!showQR ? 'active' : ''}`}>Attendance Data</button>
                    </li>
                    <li className="nav-item">
                        <button onClick={() => setShowQR(true)} className={`nav-link ${showQR ? 'active' : ''}`}>QR Code Generator</button>
                    </li>
                </ul>
                {/* <button onClick={() => setShowQR(false)}>Attendance Data</button>
                <button onClick={() => setShowQR(true)}>QR Code Generator</button> */}

                {showQR ? <QRCodeGenerator /> : <FacultyAttendanceTable />}
            </div>
        </div>
    )
}
export default Faculty