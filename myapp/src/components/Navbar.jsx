import React from 'react'
import "../components/styles.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Navbar = () => {
  return (
    <>
        <nav>
            <div className='row p-4'>
                    <div className='col-6 d-flex justify-content-start'>
                        <h3>SOLGURUZ</h3>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <AccountCircleIcon style={{height:"50px",width:"50px"}} />
                    </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
