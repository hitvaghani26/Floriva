import React from 'react'

const CancellationandRefund = () => {
  return (
    <div className='loginpage'>
    <div className='loginbody'>
      <h1>cancel and refund</h1>
      <input type='text' placeholder='Email'></input>
      <input type='text' placeholder='Product Name'></input>
      <input type='text' placeholder='product serial number'></input>
      <input type='text' placeholder='transaction number'></input>
      <input type='text' placeholder='Enter Reason'></input>
      
      
      
      <div className='loginbutton' >
        
       <p>Send Request</p>
      </div>
    </div>
  </div>
  )
}

export default CancellationandRefund