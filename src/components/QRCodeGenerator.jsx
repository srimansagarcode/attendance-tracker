import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeGenerator = () => {
    const [value, setValue] = useState('Information Technology')
    return (
        <>
            <div className='row'>
                <div className='col-md-12 d-flex justify-content-center'>

                    <div className="mb-3 row">
                        <label for="genarateQRcode" className="form-label">Genarate QR Code</label>
                        <input
                            type="text"
                            className="form-control"
                            id="genarateQRcode"
                            value={value}

                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>

                <div style={{ height: "auto", margin: "0 auto", maxWidth: 250, width: "100%" }}>
                    <QRCode
                        size={250}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        title='English'
                        value={value}
                        viewBox={`0 0 256 256`}
                    />

                </div>
            </div>
        </>
    )
}

export default QRCodeGenerator