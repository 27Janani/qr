import React, { useEffect,useState } from 'react'
import {Html5QrcodeScanner} from "html5-qrcode";

function App () {
  const [scanResult,setScanResult] = useState(null);

  useEffect(()=>{

    const Scanner = new Html5QrcodeScanner('reader',{
      qrbox:{
        width: 250,
        height: 250,
      },
      fps: 5,
    })
  
    Scanner.render(Success, error);
  
    function Success(result){
      Scanner.clear();
      setScanResult(result);
    }
  
    function error(error){
      console.log(error);
    }
  },[])


  return (
    <div>
      <h1>qr reader</h1>
      <div id='reader'></div>
      <div>{scanResult}</div>
    </div>
  )
}

export default App
