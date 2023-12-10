// import React, { useState } from 'react';
// import QrReader from 'react-qr-reader';

// const QRScan = () => {
//   const [result, setResult] = useState('');

//   const handleScan = (data) => {
//     if (data) {
//       setResult(data);
//     }
//   };

//   const handleError = (err) => {
//     console.error(err);
//   };

//   return (
//     <div>
//       <QrReader
//         delay={300}
//         onError={handleError}
//         onScan={handleScan}
//         style={{ width: '100%' }}
//       />
//       <p>Scanned Result: {result}</p>
//     </div>
//   );
// };

// export default QRScan;
