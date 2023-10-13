import React from 'react'

const ConfirmationCard = () => {
  return (
    <div className="card-container mb-2">
    <div className="d-flex flex-row">
        <div className='mx-1'>
            <img src="/src/assets/transfer-image/samuel.png" alt="" />
        </div>
        <div className='d-flex flex-column p-2'>
            <div>Amount</div>
            <div className='p-auth opacity-75'>Rp100.000</div>
        </div>
    </div>
</div>
  )
}

export default ConfirmationCard