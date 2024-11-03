import React from 'react';
import './WelcomePage.css';

import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className='row'>
      <div className='col-md-12'>
        <div className='container-welcome-outer'>
        <div className='container-welcome'>
          <div onClick={() => navigate('/faculty-login')} className='thumbnail faculty'>
            Faculty
          </div>
          <div onClick={() => navigate('/student-login')} className='thumbnail student'>
            Student
          </div>
        </div>
        </div>
      </div>
    </div>

  );
}
