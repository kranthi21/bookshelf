import React,{useState} from "react";
import QRCode from 'qrcode.react';



const Card = ({onBookSelect, key, name, isbn, category, rowNo, count, cost, availability}) =>{
    const [showQRCode, setShowQRCode] = useState(false);

    const show = () => {
        console.log(onBookSelect)
        // props.onBookSelect(props.id);
    };

    const handleGenerateQRCode = () => {
        setShowQRCode(!showQRCode); // Toggle the visibility of the QR code
    };

    return(
        <div>
        <div  
        className="card tc bg-light-green dib br3 pa1 ma2  bw2 shadow-5">
            <img src={`https://robohash.org/${key}200x200`} alt="booklogo"/>
            <div>
                
                <h2>{name}</h2>
                <dl className="f6 lh-title mv2">
                    <dt className="dib b">Cost:</dt>
                    <dd className="dib ml0">{cost + "$"}</dd>
                </dl>
            </div>
            <div>
            <p onClick={show} className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black pointer">Show Book</p>
            </div>
            {showQRCode &&
                <div>
                    <p>QR Code:</p>
                    <QRCode value={name} />
                </div>
            }
            <div>
            <p className="f6 link dim br2 ph3 pv2 mb2 dib white bg-black pointer" onClick={handleGenerateQRCode}>Generate QR Code</p>
            </div>
        </div>
        
        
        </div>
    );

}

export default Card;