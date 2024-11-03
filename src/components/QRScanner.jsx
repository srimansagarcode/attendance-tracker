import React, { useState } from 'react'
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
    const [data, setData] = useState('');

  return (
    <>
    <div className='col-md-12'>
                <div className='student-scanner'>
                    <h2 className='text-center text-success m-0'>Scan QR Code</h2>
                    {data ?
                        <QrReader
                            onResult={(result, error) => {
                                if (!!result) {
                                    setData(result?.text);
                                }

                                if (!!error) {
                                    console.info(error);
                                }
                            }}
                            style={{ width: '100%' }}
                        />

                        : <p className='text-center text-danger'>Please connect webcam</p>}

                    <h4 className='text-center text-success'>{data}</h4>
                </div>
            </div>
    </>
  )
}

export default QRScanner