import React, { useState } from 'react';
import './Main.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Main() {
  const [amount, setAmount] = useState(0);
  const[discount,setDiscountt]=useState(0);
  
  const [fdiscount,setFdiscount]=useState(0);
  const[savings,setSavings]=useState(0);

  const calculate = (e) => {
    
    if (amount === 0 || discount === 0) {
      alert("Please Enter All Fields......");
      return;
    }
  
    const output = (1 - discount / 100) * amount;
    setFdiscount(output);
  
    const out = amount - output;
    setSavings(out);
  };

const clear=(e)=>{
  setAmount(0)
  setDiscountt(0)
  setFdiscount(0)
  setSavings(0)
}



  return (
    <>
      <div className='as'>
        <div className="row" style={{ padding: "70px" }}>
          <div className="col-md-6 dis">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/invoice-4489851-3766590.png?f=webp" alt="" />
          </div>
          <div className="col-6 aa">
            <div className="container cc" style={{ marginLeft:"-5%", textAlign: "center", width: "450px", marginTop: "-5%" }}>
              <div className="row">
                <div className="col-6 p-5">
                  <p style={{ color: "red" }}>Actual Price : <br /> <span className='rs'>₹:{amount}</span> </p>
                </div>
                <div className="col-6 p-5">
                  <p style={{ color: "green" }}>Your Savings : <br /> <span className='rs' style={{ color: "green" }}>₹:{savings}</span></p>
                </div>
              </div>

              <TextField id="outlined-basic" label="Enter Amount" size='small' value={amount||""} variant="outlined" className='w-75 bg-white rounded' style={{ marginTop: "-12%" }} onChange={(e) => setAmount(e.target.value)} />

              <TextField id="outlined-basic" label="Enter Discount %" size='small' value={discount||""} variant="outlined" className='w-75 bg-white rounded' style={{ marginTop: "-5%" }} onChange={(e) => setDiscountt(e.target.value)}/>
              <br /><br />

              <div className='button'>
                <Button variant="contained" color="success" onClick={e=>calculate(e)}>
                  Calculate
                </Button>
                <Button variant="contained" color="error" onClick={e=>clear(e)}>
                  Clear
                </Button>
              </div>
              <br />
              <div className='result'>
                <p style={{ fontSize: "26px", fontWeight: "lighter" }}>Net Amount <br /> <span className='rss'>₹:{fdiscount}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
