import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
         <MDBNavbar style={{backgroundColor:"lightgreen"}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/7312/7312403.png'
              height='45'
              width='47'
              alt=''
              loading='lazy'
            />
            <div style={{fontFamily:'serif',fontWeight:"bold",color:"",fontSize:"28px",marginLeft:"4%"}}>
                Discount-Calculator
            </div>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

    </div>
  )
}

export default Header