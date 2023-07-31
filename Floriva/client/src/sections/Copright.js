import React from 'react'
import { logoleafremovebg } from '../assets'

const Copright = () => {
  return (
    <div className='copyright-sction'>
        <div className='copyright-body'>
            <div className='copyright-l'>
                <img src={logoleafremovebg} alt='logo' />
                <p>Floriva</p>
            </div>
            <div className='copyright-r'>
                <p>© 2023  All rights reserved.</p>
            </div>
        </div>
        </div>
  )
}

export default Copright